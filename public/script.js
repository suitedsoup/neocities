const books = {
    "the secret history": {
        "title": "The Secret History",
        "img": "resources/books/thesecrethistory.jpg",
        "alt": "the secret history book cover",
        "author": "Donna Tartt",
        "genre": "Dark Academia, Fiction, Mystery, Classics",
        "pages": "559 pages",
        "summary": "\"Under the influence of their charismatic classics professor, a group of clever, eccentric misfits at an elite New England college discover a way of thinking and living that is a world away from the humdrum existence of their contemporaries. But when they go beyond the boundaries of normal morality they slip gradually from obsession to corruption and betrayal, and at last—inexorably—into evil.\"",
        "notes": "So I had to read this for class, and let's just say I think it's gotten me out of my reading slump. I didn't have it at first and had to find a copy online until it came in, in which it said that Richard grew up in \"Piano, California,\" and not \"Plano, California.\" Very funny mistake to make when I went to class and we started talking about Plano and not Piano.<br><br>I didn't think I'd really like it at first - Richard just keeps narrating and saying shit about how he longed to be an orphan like the twins. I mocked him and his narration. Now, I've come to love it. I love this group of weirdos bonding over morally questionable acts. I'm almost done and I can't wait to see how this dumpster fire of a friend group turns out in the end!<br><br>Rip Bunny Corcoran, you would've loved ragebaiting"
    },
    "project hail mary": {
        "title": "Project Hail Mary",
        "img": "resources/books/projecthailmary.jpg",
        "alt": "project hail mary book cover",
        "author": "Andy Weir",
        "genre": "Science Fiction, Fantasy, Space, Thriller",
        "pages": "476 pages",
        "summary": "\"Ryland Grace is the sole survivor on a desperate, last-chance mission—and if he fails, humanity and the earth itself will perish.<br><br>Except that right now, he doesn't know that. He can't even remember his own name, let alone the nature of his assignment or how to complete it.<br><br>All he knows is that he's been asleep for a very, very long time. And he's just been awakened to find himself millions of miles from home, with nothing but two corpses for company.<br><br>His crewmates dead, his memories fuzzily returning, Ryland realizes that an impossible task now confronts him. Hurtling through space on this tiny ship, it's up to him to puzzle out an impossible scientific mystery—and conquer an extinction-level threat to our species.<br><br>And with the clock ticking down and the nearest human being light-years away, he's got to do it all alone.<br><br>Or does he?\"",
        "notes": "The first real book I've read in quite a while. Read: not fanfic. I normally dislike, even avoid, first person, but I loved the movie so much that I had to get through it. I loved it. I think it set me up well to read The Secret History for class, as I don't think I could have gotten through TSH if I hadn't gotten used to first person with this one.<br><br>Rocky my beloved."
    },
    "neuromancer": {
        "title": "Neuromancer",
        "img": "resources/books/neuromancer.jpg",
        "alt": "neuromancer book cover",
        "author": "William Gibson",
        "genre": "Science Fiction, Cyberpunk, Dystopia, Classics",
        "pages": "268 pages",
        "summary": "\"Case was the sharpest data-thief in the matrix—until he crossed the wrong people and they crippled his nervous system, banishing him from cyberspace. Now a mysterious new employer has recruited him for a last-chance run at an unthinkably powerful artificial intelligence. With a dead man riding shotgun and Molly, a mirror-eyed street-samurai, to watch his back, Case is ready for the adventure that upped the ante on an entire genre of fiction.<br><br>Neuromancer was the first fully-realized glimpse of humankind's digital future—a shocking vision that has challenged our assumptions about technology and ourselves, reinvented the way we speak and think, and forever altered the landscape of our imaginations.\"",
        "notes": "Reccomended to me, and bought the second I heard beautiful prose meet my ears. Hope to start it once I'm done with The Secret History!"
    },
    "jonathan strange": {
        "title": "Jonathan Strange & Mr Norrell",
        "img": "resources/books/jonathanstrange.jpg",
        "alt": "jonathan strange book cover",
        "author": "Susanna Clarke",
        "genre": "Fantasy, Fiction, Historical Fiction, Magic",
        "pages": "1006 pages",
        "summary": "\"The year is 1806. England is beleaguered by the long war with Napoleon, and centuries have passed since practical magicians faded into the nation's past. But scholars of this glorious history discover that one remains: the reclusive Mr Norrell, whose displays of magic send a thrill through the country.<br><br>Proceeding to London, he raises a beautiful woman from the dead and summons an army of ghostly ships to terrify the French. Yet the cautious, fussy Norrell is challenged by the emergence of another magician: the brilliant novice Jonathan Strange.<br><br>Young, handsome and daring, Strange is the very antithesis of Norrell. So begins a dangerous battle between these two great men which overwhelms that between England and France. And their own obsessions and secret dabblings with the dark arts are going to cause more trouble than they can imagine.\"",
        "notes": "It's been sitting on my bookshelf for years lol"
    },
    "babel": {
        "title": "Babel",
        "img": "resources/books/babel.jpg",
        "alt": "babel book cover",
        "author": "R. F. Kuang",
        "genre": "Fantasy, Historical Fiction, Dark Academia",
        "pages": "544 pages",
        "summary": "\"1828. Robin Swift, orphaned by cholera in Canton, is brought to London by the mysterious Professor Lovell. There, he trains for years in Latin, Ancient Greek, and Chinese, all in preparation for the day he’ll enroll in Oxford University’s prestigious Royal Institute of Translation—also known as Babel. The tower and its students are the world's center for translation and, more importantly, magic. Silver-working—the art of manifesting the meaning lost in translation using enchanted silver bars—has made the British unparalleled in power, as the arcane craft serves the Empire's quest for colonization.<br><br>For Robin, Oxford is a utopia dedicated to the pursuit of knowledge. But knowledge obeys power, and as a Chinese boy raised in Britain, Robin realizes serving Babel means betraying his motherland. As his studies progress, Robin finds himself caught between Babel and the shadowy Hermes Society, an organization dedicated to stopping imperial expansion. When Britain pursues an unjust war with China over silver and opium, Robin must decide . . .<br><br>Can powerful institutions be changed from within, or does revolution always require violence?\"",
        "notes": "It's also been sitting on my bookshelf for years lol"
    }
}

function clickSpine(bookname) {
    document.getElementById("book-title").innerHTML = books[bookname].title;
    document.getElementById("book-author").innerHTML = books[bookname].author;
    document.getElementById("book-genre").innerHTML = books[bookname].genre;
    document.getElementById("book-pages").innerHTML = books[bookname].pages;
    document.getElementById("book-summary").innerHTML = books[bookname].summary;
    document.getElementById("book-notes").innerHTML = books[bookname].notes;
    document.getElementById("book-img").src = books[bookname].img;
    document.getElementById("book-img").alt = books[bookname].alt;
}

function showText(idname) {
    var textElement = document.getElementById(idname);
    textElement.classList.toggle('hide');
}

function showAllText() {
    var hiddenElements = document.querySelectorAll(".hide");
    for (var i = 0; i < hiddenElements.length; i++) {
        hiddenElements[i].classList.toggle('hide');
    }
}