export const select = (car) => {
    alert("adf " + car.name)
    return {
        type: "CAR_SELECTED",
        payload: car
    }
}