 const songs = [
  {
    title: "Synthwave Sunset",
    artist: "Aura Beats",
    duration: "2:45",
    src: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3",
    cover: "https://images.unsplash.com/photo-1614613535308-eb5fbd3d2c17?w=100&q=80"
  },
  {
    title: "Midnight Drive",
    artist: "Neon Echoes",
    duration: "3:10",
    src: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3",
    cover: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?w=100&q=80"
  },
  {
    title: "Cyber Dreams",
    artist: "Pixel Pulse",
    duration: "3:30",
    src: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-3.mp3",
    cover: "https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?w=100&q=80"
  }
];

let songIndex = 0;
let isPlaying = false;

const audio = document.getElementById("audioPlayer");
const playBtn = document.getElementById("playBtn");
const playIcon = document.getElementById("playIcon");
const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");
const currentTitle = document.getElementById("currentTitle");
const currentArtist = document.getElementById("currentArtist");
const currentCover = document.getElementById("currentCover");
const progressBar = document.getElementById("progressBar");
const currentTimeEl = document.getElementById("currentTime");
const durationEl = document.getElementById("duration");
const volumeSlider = document.getElementById("volumeSlider");
const tracksContainer = document.getElementById("tracksContainer");

function renderTracks() {
  tracksContainer.innerHTML = "";
  songs.forEach((song, index) => {
    const row = document.createElement("div");
    row.classList.add("track-row");
    if (index === songIndex) row.classList.add("active");

    row.innerHTML = `
      <span>${index + 1}</span>
      <div class="track-title-cell">
        <img src="${song.cover}" alt="cover">
        <span>${song.title}</span>
      </div>
      <span>${song.artist}</span>
      <span>${song.duration}</span>
    `;

    row.addEventListener("click", () => {
      songIndex = index;
      loadSong(songs[songIndex]);
      playSong();
    });

    tracksContainer.appendChild(row);
  });
}

function loadSong(song) {
  currentTitle.innerText = song.title;
  currentArtist.innerText = song.artist;
  currentCover.src = song.cover;
  audio.src = song.src;
  renderTracks();
}

function playSong() {
  isPlaying = true;
  playIcon.classList.remove("fa-play");
  playIcon.classList.add("fa-pause");
  audio.play();
}

function pauseSong() {
  isPlaying = false;
  playIcon.classList.remove("fa-pause");
  playIcon.classList.add("fa-play");
  audio.pause();
}

playBtn.addEventListener("click", () => {
  isPlaying ? pauseSong() : playSong();
});

prevBtn.addEventListener("click", () => {
  songIndex = (songIndex - 1 + songs.length) % songs.length;
  loadSong(songs[songIndex]);
  playSong();
});

nextBtn.addEventListener("click", () => {
  songIndex = (songIndex + 1) % songs.length;
  loadSong(songs[songIndex]);
  playSong();
});

audio.addEventListener("timeupdate", () => {
  const { duration, currentTime } = audio;
  if (duration) {
    const progressPercent = (currentTime / duration) * 100;
    progressBar.value = progressPercent;
    
    let curMins = Math.floor(currentTime / 60);
    let curSecs = Math.floor(currentTime % 60);
    if (curSecs < 10) curSecs = `0${curSecs}`;
    currentTimeEl.innerText = `${curMins}:${curSecs}`;

    let durMins = Math.floor(duration / 60);
    let durSecs = Math.floor(duration % 60);
    if (durSecs < 10) durSecs = `0${durSecs}`;
    durationEl.innerText = `${durMins}:${durSecs}`;
  }
});

progressBar.addEventListener("input", () => {
  audio.currentTime = (progressBar.value / 100) * audio.duration;
});

volumeSlider.addEventListener("input", (e) => {
  audio.volume = e.target.value;
});

loadSong(songs[songIndex]);// Stable & 100% Working MP3 Streams for Real Playback
const songs = [
  {
    id: 1,
    title: "Dynamite",
    artist: "BTS",
    category: "bts",
    duration: "3:19",
    src: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3",
    cover: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=300&q=80",
    liked: true
  },
  {
    id: 2,
    title: "Butter",
    artist: "BTS",
    category: "bts",
    duration: "2:44",
    src: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3",
    cover: "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=300&q=80",
    liked: true
  },
  {
    id: 3,
    title: "Boy With Luv",
    artist: "BTS ft. Halsey",
    category: "bts",
    duration: "3:49",
    src: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-3.mp3",
    cover: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=300&q=80",
    liked: false
  },
  {
    id: 4,
    title: "Blinding Lights",
    artist: "The Weeknd",
    category: "english",
    duration: "3:20",
    src: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-4.mp3",
    cover: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?w=300&q=80",
    liked: true
  },
  {
    id: 5,
    title: "Pasoori",
    artist: "Ali Sethi x Shae Gill",
    category: "hindi",
    duration: "3:44",
    src: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-5.mp3",
    cover: "https://images.unsplash.com/photo-1614613535308-eb5fbd3d2c17?w=300&q=80",
    liked: true
  },
  {
    id: 6,
    title: "Kesariya",
    artist: "Arijit Singh",
    category: "hindi",
    duration: "4:28",
    src: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-6.mp3",
    cover: "https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?w=300&q=80",
    liked: false
  }
];