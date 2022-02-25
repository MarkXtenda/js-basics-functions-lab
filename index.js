function distanceFromHqInBlocks(distance) {
    const hqPosition = 43
    let hqRelativePosition = distance/hqPosition
    if (hqRelativePosition > 1) {
        return distance - hqPosition + 1
    }
    else if (hqRelativePosition === 1) {
        return 1;
    }
    else {
        return hqPosition - distance - 1
    }
}

function distanceFromHqInFeet(distance) {
    return distanceFromHqInBlocks(distance) * 264
}

function distanceTravelledInFeet(start, destination) {
    return distanceFromHqInFeet(destination) - distanceFromHqInFeet(start)
}

function calculatesFarePrice(start, destination) {
    let distanceTravelled = distanceTravelledInFeet(start, destination)
    if (distanceTravelled < 2500) {
            if (distanceTravelled < 2000) {
                if (distanceTravelled < 400) {
                    return 0
                }
                else {
                    return (distanceTravelled - 400) * 0.02}
            }
            else {
                return 25
            }
    } else {
        return 'cannot travel that far'
    }
}
console.log(distanceTravelledInFeet(43,44))
console.log(calculatesFarePrice(43,44))