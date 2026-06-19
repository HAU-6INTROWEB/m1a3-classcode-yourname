# Module 1 – Activity 3 – Upload Your Last Activity

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
