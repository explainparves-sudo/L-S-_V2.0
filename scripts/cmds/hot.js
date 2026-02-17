module.exports = {
  config: {
    name: "hot",
    version: "7.0",
    author: "ULLASH",
    countDown: 5,
    role: 0,
    shortDescription: "all video ðŸ“·",
    longDescription: "",
    category: "Video",
    guide: "{pn}"
  },
   onStart: async function ({ message }) {
   var ULLASH= ["https://files.catbox.moe/lhjjs8.mp4",
"https://files.catbox.moe/b79k8y.mp4",
"https://files.catbox.moe/qwu9sg.mp4",
"https://files.catbox.moe/3srv9r.mp4",
"https://files.catbox.moe/jyskrx.mp4",
"https://files.catbox.moe/b2y3l0.mp4",
"https://files.catbox.moe/xbvil4.mp4",
"https://files.catbox.moe/f7hmmh.mp4",
"https://files.catbox.moe/5tsgkq.mp4",
"https://files.catbox.moe/kwztva.mp4",
"https://files.catbox.moe/6em04x.mp4",
"https://files.catbox.moe/47dl4j.mp4",
"https://files.catbox.moe/3txtzc.mp4",
"https://files.catbox.moe/2rtvja.mp4",
"https://files.catbox.moe/u4guxe.mp4",
"https://files.catbox.moe/albdu8.mp4",
"https://files.catbox.moe/zf8sgo.mp4",
"https://files.catbox.moe/do9yv1.mp4",
"https://files.catbox.moe/2moph9.mp4",
"https://files.catbox.moe/icrx9t.mp4",
"https://files.catbox.moe/egaq4x.mp4",
"https://files.catbox.moe/wew12u.mp4",
]

let msg = ULLASH[Math.floor(Math.random()*ULLASH.length)]
message.send({
  body: 'মানুষ হারাম ছাড়েনা অথচ সুখ শান্তি খুঁজে বেড়ায় আরাম \nমানুষ কেন বুঝতে চায় না\n সে যে খোদার গোলাম🥺। \n\nআল্লাহ আমাদের সবাইকে হারাম থেকে দূরে থাকার তৌফিক দান করুক 😭❤️‍🩹।\n\nVideo credit : —͟͟͞͞𝐂𝐘𝐁𝐄𝐑 ☢️_𖣘 -𝐁𝐎𝐓 ⚠️ 𝑻𝑬𝑨𝑴_ ☢️',attachment: await global.utils.getStreamFromURL(msg)
})
}
  }
