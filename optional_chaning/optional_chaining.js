// Access deeply nested object properties without worrting if the property exists or not

const socialMedia = {
    name: 'Alien',
    websites: {
        intagram: '@alien'
    }
}

console.log(socialMedia.websites?.intagram);

console.log(socialMedia.websites?.youtube);