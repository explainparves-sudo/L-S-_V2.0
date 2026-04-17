/**
 * @author NTKhang
 * Updated for Port Binding on Render/Replit
 * Official source: https://github.com/ntkhang03/Goat-Bot-V2
 */

const { spawn } = require("child_process");
const express = require("express");
const log = require("./logger/log.js");
const app = express();

// ১. পোর্ট বাইন্ডিং ফিক্স (Render/Replit এর জন্য)
const port = process.env.PORT || 8080;

app.get("/", (req, res) => {
    res.send("Bot is running perfectly!");
});

app.listen(port, () => {
    log.info(`Server is listening on port ${port}`);
});

function startProject() {
    // ২. Sakura.js স্টার্ট করা
    const child = spawn("node", ["Sakura.js"], {
        cwd: __dirname,
        stdio: "inherit",
        shell: true,
        // এখানে PORT এনভায়রনমেন্ট ঠিক করে দেওয়া হয়েছে
        env: { ...process.env, PORT: port } 
    });

    child.on("close", (code) => {
        // কোড ২ মানে রিস্টার্ট রিকোয়েস্ট
        if (code === 2) {
            log.info("Restarting Project...");
            startProject();
        } else if (code !== 0) {
            log.err("INDEX", `Project stopped with code: ${code}. Restarting in 5s...`);
            setTimeout(startProject, 5000); // ক্রাশ করলে ৫ সেকেন্ড পর আবার ট্রাই করবে
        }
    });

    child.on("error", (err) => {
        log.err("INDEX", "Failed to start Sakura.js", err);
    });
}

// প্রজেক্ট শুরু
startProject();
