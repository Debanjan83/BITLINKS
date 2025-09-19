"use client"

import Link from "next/link"
import React, { useState } from "react"
import { ToastContainer, toast } from 'react-toastify';
import { Bounce } from "react-toastify";

const Shorten = () => {
  const [url, setUrl] = useState("")
  const [shorturl, setShortUrl] = useState("")
  const [generated, setGenerated] = useState("")

  const generate = () => {
    const myHeaders = new Headers()
    myHeaders.append("Content-Type", "application/json")

    const raw = JSON.stringify({
      url: url,
      shorturl: shorturl,
    })

    const requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow",
    }

    fetch("/api/generate", requestOptions)
      .then((response) => response.json())
      .then((result) => {
        setGenerated(`${process.env.NEXT_PUBLIC_HOST}/${shorturl}`)
        setUrl("")
        setShortUrl("")
        toast('URL Generated Successfully!', {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: false,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
          transition: Bounce,
        });
      })
      .catch((error) => console.error(error))
  }

  const copyToClipboard = () => {
    navigator.clipboard.writeText(generated)
    toast('Copied to Clipboard!', {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: false,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      transition: Bounce,
    });
  }

  return (
    <>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
        transition={Bounce}
      />
      <div className="bg-gradient-to-b from-blue-50 via-cyan-50 to-white min-h-screen py-16 px-6 mt-10">
        <h1 className="text-4xl md:text-5xl font-extrabold text-center text-gray-800 mb-6">
          Shorten Your <span className="text-blue-600">Links</span> Instantly
        </h1>
        <p className="text-center text-gray-600 max-w-2xl mx-auto mb-12">
          Paste your long URL below, customize your short link, and get a shareable link
          within seconds. No signups, no tracking, just a simple and fast link shortener.
        </p>

        <div className="mx-auto max-w-lg bg-white border border-gray-200 my-8 p-8 rounded-2xl shadow-xl flex flex-col gap-6">
          <h2 className="font-bold text-2xl text-center text-gray-800">
            Generate Your Short URL
          </h2>

          <div className="flex flex-col gap-4">
            <input
              className="px-4 py-3 border rounded-lg bg-gray-50 shadow-sm focus:ring-2 focus:ring-blue-500 focus:outline-none"
              type="text"
              placeholder="Enter your long URL"
              onChange={(e) => setUrl(e.target.value)}
              value={url}
            />
            <input
              className="px-4 py-3 border rounded-lg bg-gray-50 shadow-sm focus:ring-2 focus:ring-blue-500 focus:outline-none"
              type="text"
              placeholder="Enter preferred short URL"
              onChange={(e) => setShortUrl(e.target.value)}
              value={shorturl}
            />
            <button
              onClick={generate}
              className="bg-blue-600 hover:bg-blue-700 transition-all text-white font-bold py-3 rounded-lg shadow-md cursor-pointer"
            >
              Generate
            </button>
          </div>

          {generated && (
            <div className="flex flex-col gap-2 mt-4 items-center">
              <span className="font-semibold text-lg text-gray-700">
                Your Link is Ready 🎉
              </span>
              <div className="flex items-center gap-2 bg-gray-100 px-4 py-2 rounded-lg border shadow-sm">
                <code className="text-blue-600 font-mono">
                  <Link target="_blank" href={generated}>
                    {generated}
                  </Link>
                </code>
                <button
                  onClick={copyToClipboard}
                  className="ml-2 px-3 py-1 text-sm rounded-md bg-blue-500 text-white hover:bg-blue-600 transition-all cursor-pointer"
                >
                  Copy
                </button>
              </div>
            </div>
          )}
        </div>

        <section className="max-w-6xl mx-auto mt-20">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-10">
            Why Choose <span className="text-teal-600">BitLinks</span>?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="p-6 bg-white shadow-md rounded-xl">
              <h3 className="text-xl font-semibold text-blue-600 mb-2">⚡ Fast & Simple</h3>
              <p className="text-gray-600">Generate short links instantly with zero complexity.</p>
            </div>
            <div className="p-6 bg-white shadow-md rounded-xl">
              <h3 className="text-xl font-semibold text-teal-600 mb-2">🔒 Privacy First</h3>
              <p className="text-gray-600">No sign-ups, no tracking, your data stays yours.</p>
            </div>
            <div className="p-6 bg-white shadow-md rounded-xl">
              <h3 className="text-xl font-semibold text-blue-600 mb-2">🌍 Share Anywhere</h3>
              <p className="text-gray-600">Use your short links on social media, emails, or blogs.</p>
            </div>
          </div>
        </section>

        <section className="max-w-4xl mx-auto mt-20">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-10">
            How It <span className="text-blue-600">Works</span>
          </h2>
          <ol className="space-y-6 text-lg text-gray-700">
            <li className="flex items-start gap-4">
              <span className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold">
                1
              </span>
              Paste your long URL in the input box.
            </li>
            <li className="flex items-start gap-4">
              <span className="bg-teal-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold">
                2
              </span>
              Choose your preferred short link.
            </li>
            <li className="flex items-start gap-4">
              <span className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold">
                3
              </span>
              Click <strong>Generate</strong> and get your shareable short link instantly.
            </li>
          </ol>
        </section>
      </div>
    </>
  )
}

export default Shorten
