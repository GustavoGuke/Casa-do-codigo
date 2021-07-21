const fortuneCookies = [
    'conquer your fears or they will conquer you',
    'Rivers need springs',
    'Do not fear what you don´t know',
    'You will have a pleasant surprise',
    'Whenever possible, keep it simple'
]

export default function getFortune() {
    const idx = Math.floor(Math.random()*fortuneCookies.length)
    return fortuneCookies[idx]
}