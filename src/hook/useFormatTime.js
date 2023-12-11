const formatTime = (origintime) => {
    let second = parseInt(origintime % 60)
    let min = parseInt((origintime / 60) % 60)
    const secondstr = second <= 9 ? `0${second}` : second;
    const minstr = min <= 9 ? `0${min}` : min;
    return `${minstr}:${secondstr}`
}
export default formatTime