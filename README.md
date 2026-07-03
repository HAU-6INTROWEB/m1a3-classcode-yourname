# Module 1 – Activity 3 – Upload Your Last Activity

[![Made with Claude](https://img.shields.io/badge/Made_with-Claude-D97757?logo=anthropic&logoColor=white)](https://tjakoen.github.io/notes/ten-times-zero)
![HTML5](https://img.shields.io/badge/HTML5-E34F26?logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?logo=javascript&logoColor=black)

There is **nothing new to build** in this activity. It is a quick checkpoint so
your most recent work is in the course org and graded.

**What to do:** take the activity you made **last Saturday** (your `.html`
file) and upload it here. As long as a valid HTML file is present and your
`student.json` is filled in, you get an **automatic 5 points**.

## What to do

### 1. Add last Saturday's activity

> **Work in the [`src/`](src/) folder.** That is the only folder you edit.
> Everything else (`test/`, `package.json`, `.github/`) is course plumbing —
> leave it alone.

Put your `.html` file from last Saturday inside [`src/`](src/), replacing the
placeholder [`src/index.html`](src/index.html). Any valid HTML page is
accepted, and you may keep the original filename.

### 2. Fill in your details

Open `student.json` and fill in every field (use the **class code** your
instructor gave you):

```json
{
  "classCode": "1234",
  "fullName": "Juan Dela Cruz",
  "studentNumber": "2026-12345",
  "studentEmail": "juan.delacruz@hau.edu.ph",
  "personalEmail": "juan@example.com",
  "githubAccount": "juandelacruz"
}
```

> **Keep `student.json` identical across all your activities.** The autograder
> cross-checks these fields between your repos, and a mismatch (e.g. a different
> `classCode` in one activity) is flagged. The `classCode` must also match the
> one in your repo name.

## Set up your repo

Before you upload, create **your own copy** of this activity from the template.
Do not work in the template itself.

1. **Create from the template.** Open the template repo and click
   **Use this template → Create a new repository**.
2. **Set the owner to the course org.** Under *Owner*, choose the
   **`HAU-6INTROWEB` course org**, **not** your personal account.
3. **Name it by the convention** `m<module>a<activity>-<classcode>-<yourname>`.
   For this activity that's **`m1a3-<classcode>-yourname`** (e.g.
   `m1a3-1234-juandelacruz`). The `<classcode>` must match the one you put in
   `student.json`.
4. **Make it Private.** Set *Visibility* to **Private** so classmates can't see
   your work.

Then clone **your** new repo and work there:

```bash
git clone https://github.com/HAU-6INTROWEB/m1a3-<classcode>-yourname.git
cd m1a3-<classcode>-yourname
```

## Running the tests

Install dependencies once:

```bash
npm install
```

Then run the tests:

```bash
npm test
```

This activity is graded by **5 tests (1 point each = 5 points)**. They check:

- ✅ there is an `.html` file in `src/`
- ✅ the HTML file is not empty
- ✅ the HTML file parses and has real HTML elements
- ✅ the page has a `<head>` or `<body>`
- ✅ `student.json` is completely filled in

A valid upload with your details filled in passes all five automatically.

## Confirm your submission

Your repo **is** your submission, so there is nothing to upload anywhere else.
**Pushing your work is how you submit it.** When your tests pass locally,
**commit and push**:

```bash
git add -A
git commit -m "Activity 3 complete"
git push
```

Pushing triggers the **Autograde** workflow on GitHub. Confirm your submission
landed:

1. Open your repo on GitHub and click the **Actions** tab.
2. Open the latest **Autograde** run and confirm the green ✅ check
   and the "5 / 5 tests passed" summary.

## 💻 Work in a Codespace (recommended)

A **Codespace** is a complete dev environment that runs in the cloud, so you do
not have to install Node, Dart, or anything else on your own laptop. This repo is
already configured: open a Codespace and everything you need is ready.

**Open one:** click the green **Code** button → **Codespaces** tab → **Create
codespace on main**. The first launch takes a minute to set up; after that it is
instant. Then run the activity from its terminal exactly as described below.

**Use it in VS Code (recommended).** It works in the browser, but it is nicer in
the desktop app: install the **GitHub Codespaces** extension in VS Code, or from
the running Codespace click the menu (☰) → **Open in VS Code Desktop**. Same
environment, your own editor.

### ⏱️ Make your free hours last (please read)
Your GitHub Education account includes a generous but limited monthly Codespaces
allowance. Three habits keep you from wasting it:

1. **Set your idle timeout to 10 minutes.** Go to
   **github.com/settings/codespaces → Default idle timeout → 10 minutes → Save.**
   A Codespace keeps running (and spending your hours) when you walk away; this
   makes it auto-stop after 10 idle minutes.
2. **Stop it when you finish - don't just close the tab.** Closing the browser
   leaves it running. Stop it at **github.com/codespaces → ••• → Stop
   codespace**, or from inside the editor open the **Command Palette**
   (`Ctrl`/`Cmd`+`Shift`+`P`, or **F1**) and run
   *Codespaces: Stop Current Codespace*.
3. **Delete the Codespace once you've submitted this activity.** Every activity
   gets its own Codespace, so old ones pile up and use your storage. After your
   final push: **github.com/codespaces → ••• → Delete.** You can always recreate
   it later from the green **Code** button.

---
📚 **These materials were authored by [tjakoen](https://github.com/tjakoen), built with Claude.** I use AI in the open, and I expect you to use it to learn the material, not to skip the learning. [How I actually work with AI →](https://tjakoen.github.io/notes/ten-times-zero)
