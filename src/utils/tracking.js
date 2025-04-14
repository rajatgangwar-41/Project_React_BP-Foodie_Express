const generateTrackingData = () => {
  const now = new Date()
  const baseTime = new Date(now.getTime() - 45 * 60 * 1000) // Start 45 minutes ago

  // Common status sequence for food delivery
  const statusSequence = [
    { status: "Order placed", time: new Date(baseTime) },
    {
      status: "Restaurant accepted",
      time: new Date(baseTime.getTime() + 2 * 60 * 1000), // +2 mins
    },
    {
      status: "Preparing food",
      time: new Date(baseTime.getTime() + 5 * 60 * 1000), // +5 mins
    },
    {
      status: "Food ready",
      time: new Date(baseTime.getTime() + 20 * 60 * 1000), // +20 mins
    },
    {
      status: "Driver assigned",
      time: new Date(baseTime.getTime() + 22 * 60 * 1000), // +22 mins
    },
    {
      status: "Picked up",
      time: new Date(baseTime.getTime() + 32 * 60 * 1000), // +32 mins
    },
    {
      status: "On the way",
      time: new Date(baseTime.getTime() + 35 * 60 * 1000), // +35 mins
    },
    {
      status: "Nearby",
      time: new Date(baseTime.getTime() + 40 * 60 * 1000), // +40 mins
    },
    {
      status: "Delivered",
      time: new Date(baseTime.getTime() + 45 * 60 * 1000), // +45 mins
    },
  ]

  // Randomize some timings slightly (±2 minutes) for realism
  statusSequence.forEach((status) => {
    const randomOffset = (Math.random() * 4 - 2) * 60 * 1000 // ±2 minutes
    status.time = new Date(status.time.getTime() + randomOffset)
  })

  // Mark some steps as completed (all before current status)
  const currentStatusIndex =
    Math.floor(Math.random() * (statusSequence.length - 2)) + 2 // At least 2 steps completed
  return statusSequence.map((step, index) => ({
    ...step,
    time: step.time.toISOString(),
    completed: index <= currentStatusIndex,
  }))
}

// Usage:
export default generateTrackingData
