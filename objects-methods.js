let  restaurant = {
    name: `Sams no. 3`,
    guestCapacity: 75,
    guestCount: 0,
    checkAvailability: function (partySize) {
        let seatsLeft = this.guestCapacity - this.guestCount
        return partySize <= seatsLeft
    },
    seatParty: function(partySize) {
        return this.guestCount += partySize
    },
    removeParty: function(partySize){
        return this.guestCount -= partySize
    }
}

// seatParty, takes the size of the party to be seated and adds
//          that onto guest count
// removeParty, takes the size of the party to be leaving the restaurant
//          and subtracts that off the guest count

restaurant.seatParty(72)
console.log(restaurant.checkAvailability(4));
restaurant.removeParty(5)
console.log(restaurant.checkAvailability(4));