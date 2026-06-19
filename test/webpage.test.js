import { describe, it, expect } from 'vitest'
import { readFileSync, readdirSync, existsSync } from 'node:fs'
import { fileURLToPath } from 'node:url'
import { JSDOM } from 'jsdom'

// This activity is a simple re-upload: drop last Saturday's activity into
// src/. The only things graded are that a VALID HTML FILE is present and that
// student.json is filled in. Every check below passes automatically for a
// valid upload, so it is worth the full 5 points.

const read = (rel) =>
  readFileSync(fileURLToPath(new URL(rel, import.meta.url)), 'utf8')

const srcDir = fileURLToPath(new URL('../src', import.meta.url))

// Recursively collect every .html file under src/ (any filename is fine).
const listHtml = (dir, rel = '') => {
  if (!existsSync(dir)) return []
  const out = []
  for (const e of readdirSync(dir, { withFileTypes: true })) {
    if (e.name.startsWith('.')) continue
    const r = rel ? `${rel}/${e.name}` : e.name
    if (e.isDirectory()) out.push(...listHtml(`${dir}/${e.name}`, r))
    else if (e.name.toLowerCase().endsWith('.html')) out.push(`${dir}/${e.name}`)
  }
  return out
}

const htmlFiles = listHtml(srcDir)
const firstHtml = htmlFiles[0] ? readFileSync(htmlFiles[0], 'utf8') : ''
const doc = firstHtml ? new JSDOM(firstHtml).window.document : null

describe('Activity 3 – Upload your last activity', () => {
  it('has at least one .html file in src/', () => {
    expect(
      htmlFiles.length,
      "Put last Saturday's activity (an .html file) inside the src/ folder",
    ).toBeGreaterThanOrEqual(1)
  })

  it('the HTML file is not empty', () => {
    expect(firstHtml.trim().length, 'Your .html file looks empty').toBeGreaterThan(0)
  })

  it('the HTML file parses and has real HTML elements', () => {
    expect(doc, 'Your .html file could not be parsed as HTML').not.toBeNull()
    expect(
      doc?.querySelectorAll('*').length ?? 0,
      'The page has no HTML elements in it',
    ).toBeGreaterThan(0)
  })

  it('the page has a <body> or <head>', () => {
    expect(
      Boolean(doc?.querySelector('body, head')),
      'A valid HTML page needs a <head> or a <body>',
    ).toBe(true)
  })
})

describe('Student info (student.json)', () => {
  const info = JSON.parse(read('../student.json'))

  it('student.json is filled in', () => {
    for (const field of [
      'classCode',
      'fullName',
      'studentNumber',
      'studentEmail',
      'personalEmail',
      'githubAccount',
    ]) {
      expect(info[field], `Set "${field}" in student.json`).toBeTruthy()
    }
  })
})
