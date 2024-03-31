let btn = document.getElementById('btn');
let output = document.getElementById('output');
let facts = [
    '1. The Andromeda Galaxy, also known as M31, is a giant spiral galaxy similar to the Milky Way but with about twice its mass (Leahy, 349)',
    '2. Andromeda contains the basic structures of spiral galaxies: the disk, the central bulge and the halo (Leahy, 349)',
    '3. Andromeda`s gamma-ray halo is created by electrons currently accelerated in a bow shock propagating through the galactic halo (Zirakashvili, L9)',
    '4. The collision of Andromeda and the Milky Way will occur in about 4 billion years, but unfortunately, the Sun will not live long enough to witness the formation of Milkomeda and therefore will not become part of the new galaxy (Schiavi, A30)',
    '5. Total mass of Andromeda is 1.6 × 10^12 M⊙,  comparing to Milky Way 1.0 × 10^12 M⊙ (Schiavi, A30)',
    '6. M31 is also the most massive member of the Local Group, with the Milky Way being the only other massive one (Leahy 349)',
    //'',
    // 'Fact 8',
    // 'Fact 9',
    // 'Fact 10',
]

btn.addEventListener('click', function(){
    var randomFact = facts[Math.floor(Math.random() * facts.length)]
    output.innerHTML = randomFact
})