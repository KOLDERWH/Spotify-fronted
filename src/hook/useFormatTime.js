const formatTime = (origintime) => {
    let second = parseInt(origintime % 60)
    let min = parseInt((origintime / 60) % 60)
    second = second <= 9 ? `0${second}` : second;
    return `${min}:${second}`
}
export default formatTime