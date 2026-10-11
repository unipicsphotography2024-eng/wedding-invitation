
import { useEffect, useState } from 'react'
import { weddingData } from './weddingData'
import './App.css'

type EventItem = {
  title: string
  date: string
  time: string
  location: string
}

function App() {
  const [groomName, setGroomName] = useState(
    () => localStorage.getItem('groomName') || weddingData.groomName
  )
  const [brideName, setBrideName] = useState(
    () => localStorage.getItem('brideName') || weddingData.brideName
  )
  const [weddingDateTime, setWeddingDateTime] = useState(
    () => localStorage.getItem('weddingDateTime') || weddingData.weddingDate
  )
  const [venueName, setVenueName] = useState(
    () => localStorage.getItem('venueName') || weddingData.venueName
  )
  const [venueAddress, setVenueAddress] = useState(
    () => localStorage.getItem('venueAddress') || weddingData.venueAddress
  )
  const [mapLink, setMapLink] = useState(
    () => localStorage.getItem('mapLink') || weddingData.mapLink
  )
  const [groomParents, setGroomParents] = useState(
    () => localStorage.getItem('groomParents') || 'Father Name & Mother Name'
  )
  const [brideParents, setBrideParents] = useState(
    () => localStorage.getItem('brideParents') || 'Father Name & Mother Name'
  )
  const [events, setEvents] = useState<EventItem[]>(() => {
    const saved = localStorage.getItem('weddingEvents')
    if (saved) {
      try {
        return JSON.parse(saved) as EventItem[]
      } catch {
        // Use the default schedule if saved data is invalid.
      }
    }
    return [
      {
        title: 'Reception',
        date: weddingData.dateLabel,
        time: '6:00 PM onwards',
        location: weddingData.venueName,
      },
      {
        title: 'Muhurtham',
        date: weddingData.dateLabel,
        time: '9:00 AM onwards',
        location: weddingData.venueName,
      },
    ]
  })
  const [rsvpName, setRsvpName] = useState('')
  const [rsvpGuests, setRsvpGuests] = useState('2')
  const [rsvpStatus, setRsvpStatus] = useState('Joyfully Accept')
  const [rsvpMessage, setRsvpMessage] = useState('')
  const [showAdmin, setShowAdmin] = useState(false)
  const [showRsvp, setShowRsvp] = useState(false)
  const [countdown, setCountdown] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  })

  useEffect(() => {
    const updateCountdown = () => {
      const remaining = Math.max(
        0,
        new Date(weddingDateTime).getTime() - Date.now()
      )
      setCountdown({
        days: Math.floor(remaining / 86400000),
        hours: Math.floor((remaining / 3600000) % 24),
        minutes: Math.floor((remaining / 60000) % 60),
        seconds: Math.floor((remaining / 1000) % 60),
      })
    }

    updateCountdown()
    const timer = window.setInterval(updateCountdown, 1000)
    return () => window.clearInterval(timer)
  }, [weddingDateTime])

  const weddingDate = new Date(weddingDateTime)
  const validDate = !Number.isNaN(weddingDate.getTime())
  const formattedDate = validDate
    ? weddingDate.toLocaleDateString('en-IN', {
        day: 'numeric',
        month: 'long',
        year: 'numeric',
      })
    : weddingData.dateLabel
  const formattedTime = validDate
    ? weddingDate.toLocaleTimeString('en-IN', {
        hour: '2-digit',
        minute: '2-digit',
      })
    : weddingData.timeLabel

  const saveDetails = () => {
    if (
      !groomName.trim() ||
      !brideName.trim() ||
      !validDate ||
      !venueName.trim()
    ) {
      alert('Please enter valid names, date, time and venue.')
      return
    }

    localStorage.setItem('groomName', groomName)
    localStorage.setItem('brideName', brideName)
    localStorage.setItem('weddingDateTime', weddingDateTime)
    localStorage.setItem('venueName', venueName)
    localStorage.setItem('venueAddress', venueAddress)
    localStorage.setItem('mapLink', mapLink)
    localStorage.setItem('groomParents', groomParents)
    localStorage.setItem('brideParents', brideParents)
    localStorage.setItem('weddingEvents', JSON.stringify(events))

    alert('Wedding invitation details saved!')
    setShowAdmin(false)
  }

  const updateEvent = (
    index: number,
    field: keyof EventItem,
    value: string
  ) => {
    setEvents((current) =>
      current.map((event, i) =>
        i === index ? { ...event, [field]: value } : event
      )
    )
  }

  const submitRsvp = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const message = [
      'Wedding RSVP',
      `Name: ${rsvpName}`,
      `Guests: ${rsvpGuests}`,
      `Response: ${rsvpStatus}`,
      `Message: ${rsvpMessage || 'None'}`,
    ].join('\n')

    const url = `https://wa.me/?text=${encodeURIComponent(message)}`
    window.open(url, '_blank', 'noopener,noreferrer')
  }

  const shareInvitation = async () => {
    const shareData = {
      title: `${groomName} & ${brideName} Wedding`,
      text: `Join us to celebrate ${groomName} & ${brideName} on ${formattedDate}.`,
      url: window.location.href,
    }

    try {
      if (navigator.share) {
        await navigator.share(shareData)
      } else if (navigator.clipboard) {
        await navigator.clipboard.writeText(window.location.href)
        alert('Invitation link copied!')
      } else {
        alert('Copy this invitation link: ' + window.location.href)
      }
    } catch {
      // The visitor may close the share dialog.
    }
  }

  return (
    <main className="invitation">
      <div className="ambient ambient-one" />
      <div className="ambient ambient-two" />

      <header className="topbar">
        <a className="brand" href="#home">THE WEDDING INVITATION</a>
        <div className="top-actions">
          <button className="text-button" onClick={shareInvitation}>
            SHARE INVITE ↗
          </button>
          <button
            className="admin-toggle"
            onClick={() => setShowAdmin((current) => !current)}
          >
            {showAdmin ? 'CLOSE EDITOR' : 'EDIT INVITE'}
          </button>
        </div>
      </header>

      {showAdmin && (
        <section className="admin-panel">
          <div className="admin-heading">
            <p className="eyebrow">PRIVATE EDITOR</p>
            <h2>Personalise Your Invitation</h2>
            <p>Changes are saved in this browser on this device.</p>
          </div>

          <div className="admin-grid">
            <label>
              Groom's name
              <input value={groomName} onChange={(e) => setGroomName(e.target.value)} />
            </label>
            <label>
              Bride's name
              <input value={brideName} onChange={(e) => setBrideName(e.target.value)} />
            </label>
            <label>
              Wedding date & time
              <input
                type="datetime-local"
                value={weddingDateTime}
                onChange={(e) => setWeddingDateTime(e.target.value)}
              />
            </label>
            <label>
              Venue name
              <input value={venueName} onChange={(e) => setVenueName(e.target.value)} />
            </label>
            <label className="wide-field">
              Venue address
              <input value={venueAddress} onChange={(e) => setVenueAddress(e.target.value)} />
            </label>
            <label className="wide-field">
              Google Maps link
              <input value={mapLink} onChange={(e) => setMapLink(e.target.value)} />
            </label>
            <label>
              Groom's parents
              <input value={groomParents} onChange={(e) => setGroomParents(e.target.value)} />
            </label>
            <label>
              Bride's parents
              <input value={brideParents} onChange={(e) => setBrideParents(e.target.value)} />
            </label>
          </div>

          <div className="admin-events">
            <h3>Edit Event Schedule</h3>
            {events.map((event, index) => (
              <div className="event-editor" key={`${event.title}-${index}`}>
                <input
                  aria-label={`Event ${index + 1} title`}
                  value={event.title}
                  onChange={(e) => updateEvent(index, 'title', e.target.value)}
                  placeholder="Event name"
                />
                <input
                  aria-label={`Event ${index + 1} date`}
                  value={event.date}
                  onChange={(e) => updateEvent(index, 'date', e.target.value)}
                  placeholder="Event date"
                />
                <input
                  aria-label={`Event ${index + 1} time`}
                  value={event.time}
                  onChange={(e) => updateEvent(index, 'time', e.target.value)}
                  placeholder="Event time"
                />
                <input
                  aria-label={`Event ${index + 1} location`}
                  value={event.location}
                  onChange={(e) => updateEvent(index, 'location', e.target.value)}
                  placeholder="Event location"
                />
              </div>
            ))}
            <button
              className="secondary-button"
              onClick={() =>
                setEvents((current) => [
                  ...current,
                  {
                    title: 'New Event',
                    date: formattedDate,
                    time: 'Time to be announced',
                    location: venueName,
                  },
                ])
              }
            >
              + ADD EVENT
            </button>
          </div>

          <button className="primary-button" onClick={saveDetails}>
            SAVE ALL CHANGES
          </button>
        </section>
      )}

      <section className="hero" id="home">
        <p className="eyebrow">TOGETHER WITH OUR FAMILIES</p>
        <div className="ornament" aria-hidden="true">✦ ─── ✦ ─── ✦</div>
        <p className="hero-kicker">A CELEBRATION OF LOVE</p>
        <h1>We Are Getting Married</h1>
        <p className="hero-copy">
          With grateful hearts and the blessings of our families,
          we invite you to share in the joy of our wedding celebration.
        </p>

        <div className="couple-names">
          <span>{groomName}</span>
          <span className="ampersand">&</span>
          <span>{brideName}</span>
        </div>

        <div className="date-plaque">
          <span className="plaque-label">SAVE THE DATE</span>
          <p className="date-value">{formattedDate}</p>
          <span className="date-divider" />
          <p className="time-value">{formattedTime}</p>
        </div>

        <p className="family-intro">WITH THE BLESSINGS OF</p>
        <div className="families-grid">
          <div className="family-card">
            <h2>Groom's Family</h2>
            <p>{groomParents}</p>
          </div>
          <div className="family-card">
            <h2>Bride's Family</h2>
            <p>{brideParents}</p>
          </div>
        </div>

        <div className="venue-block">
          <p className="eyebrow">THE WEDDING VENUE</p>
          <h2>{venueName}</h2>
          <p>{venueAddress}</p>
          <a
            className="map-link"
            href={mapLink}
            target="_blank"
            rel="noreferrer"
          >
            VIEW VENUE ON MAP ↗
          </a>
        </div>
      </section>

      <section className="countdown-section">
        <p className="eyebrow">THE MOMENT IS APPROACHING</p>
        <h2>Counting Down to Forever</h2>
        <div className="countdown-grid">
          <div className="countdown-item">
            <strong>{countdown.days}</strong><span>Days</span>
          </div>
          <div className="countdown-item">
            <strong>{countdown.hours}</strong><span>Hours</span>
          </div>
          <div className="countdown-item">
            <strong>{countdown.minutes}</strong><span>Minutes</span>
          </div>
          <div className="countdown-item">
            <strong>{countdown.seconds}</strong><span>Seconds</span>
          </div>
        </div>
      </section>

      <section className="events-section">
        <p className="eyebrow">JOIN US FOR</p>
        <h2>Wedding Celebrations</h2>
        <p className="section-copy">Every moment means more with you there.</p>
        <div className="events-grid">
          {events.map((event, index) => (
            <article className="event-card" key={`${event.title}-${index}`}>
              <span className="event-number">
                {String(index + 1).padStart(2, '0')}
              </span>
              <h3>{event.title}</h3>
              <p>{event.date}</p>
              <p>{event.time}</p>
              <span className="event-location">{event.location}</span>
            </article>
          ))}
        </div>
      </section>

      <section className="rsvp-section">
        <p className="eyebrow">KINDLY RESPOND</p>
        <h2>Will You Join Us?</h2>
        <p className="section-copy">
          Your presence would make our celebration even more special.
        </p>
        <button
          className="primary-button"
          onClick={() => setShowRsvp((current) => !current)}
        >
          {showRsvp ? 'CLOSE RSVP' : 'RESPOND TO INVITATION'}
        </button>

        {showRsvp && (
          <form className="rsvp-form" onSubmit={submitRsvp}>
            <label>
              Your name
              <input
                required
                value={rsvpName}
                onChange={(e) => setRsvpName(e.target.value)}
                placeholder="Enter your name"
              />
            </label>
            <label>
              Number of guests
              <select
                value={rsvpGuests}
                onChange={(e) => setRsvpGuests(e.target.value)}
              >
                <option value="1">1 guest</option>
                <option value="2">2 guests</option>
                <option value="3">3 guests</option>
                <option value="4">4 guests</option>
                <option value="5+">5 or more guests</option>
              </select>
            </label>
            <label>
              Your response
              <select
                value={rsvpStatus}
                onChange={(e) => setRsvpStatus(e.target.value)}
              >
                <option>Joyfully Accept</option>
                <option>Regretfully Decline</option>
              </select>
            </label>
            <label>
              Message (optional)
              <textarea
                value={rsvpMessage}
                onChange={(e) => setRsvpMessage(e.target.value)}
                placeholder="Write a short message"
                rows={3}
              />
            </label>
            <button className="primary-button" type="submit">
              SEND RSVP ON WHATSAPP
            </button>
          </form>
        )}
      </section>

      <footer className="footer">
        <div className="ornament" aria-hidden="true">✦ ─── ✦ ─── ✦</div>
        <p>WITH LOVE,</p>
        <h2>{groomName} & {brideName}</h2>
        <p className="footer-note">WE CAN'T WAIT TO CELEBRATE WITH YOU</p>
        <button className="text-button" onClick={shareInvitation}>
          SHARE THIS INVITATION ↗
        </button>
      </footer>
    </main>
  )
}

export default App
