const getRandomRider = () => {
  // Random names
  const firstNames = [
    "Alex",
    "Jamie",
    "Taylor",
    "Morgan",
    "Casey",
    "Jordan",
    "Riley",
    "Dakota",
  ]
  const lastNames = [
    "Johnson",
    "Smith",
    "Williams",
    "Brown",
    "Davis",
    "Miller",
    "Wilson",
  ]

  // Random vehicle types
  const vehicles = ["Bike", "Scooter", "Motorcycle", "Car", "E-bike"]

  // Generate random values
  const randomFirstName =
    firstNames[Math.floor(Math.random() * firstNames.length)]
  const randomLastName = lastNames[Math.floor(Math.random() * lastNames.length)]
  const randomVehicle = vehicles[Math.floor(Math.random() * vehicles.length)]
  const randomRating = (Math.random() * 2 + 3.5).toFixed(1) // Rating between 3.5-5.5
  const randomPhone = `9${Math.floor(100000000 + Math.random() * 900000000)}` // Indian phone number format

  return {
    name: `${randomFirstName} ${randomLastName}`,
    phone: randomPhone,
    rating: parseFloat(randomRating),
    vehicle: randomVehicle,
    image: `https://randomuser.me/api/portraits/${
      Math.random() > 0.5 ? "men" : "women"
    }/${Math.floor(Math.random() * 100 + 1)}.jpg`,
  }
}

export default getRandomRider
