export const navigate = (href) => {
  window.history.pushState({}, '', href)
  // create a custom event
  const navigateEvent = new Event('pushState')
  window.dispatchEvent(navigateEvent)
}

export const Link = ({ target, to, ...props }) => {
  const handleClick = (event) => {
    const isMainEvent = event.button === 0
    const isModifiedEvent = event.metaKey || event.altKey || event.ctrlKey || event.shiftKey
    const isManagableEvent = target === undefined || target === 'self'

    if (isMainEvent && isManagableEvent && !isModifiedEvent) {
      event.preventDefault()
      navigate(to)
    }
  }

  return <a onClick={handleClick} href={to} {...props} />
}
