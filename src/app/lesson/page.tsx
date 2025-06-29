'use client'

import { useState } from 'react'
import Image from 'next/image'

export default function AnswerPage() {
  const [input, setInput] = useState('')
  const [result, setResult] = useState('')

  // const handleSubmit = async () => {
  //   if (!input) return

  //   const res = await fetch('/api/answer', {
  //     method: 'POST',
  //     headers: {
  //       'Content-Type': 'application/json',
  //     },
  //     body: JSON.stringify({ input }),
  //   })

  //   const data = await res.json()
  //   setResult(data.output)
  // }

  return (
    <div className="w-full flex justify-center bg-gray-100 min-h-screen">
      <div className="flex flex-col items-center px-4 py-6 min-h-screen bg-white text-black max-w-[768px] w-full">
        {/* アバター */}
        <Image
          src="/avator_sample.svg"
          alt="アバター"
          width={360}
          height={180}
          className="mb-4"
        />

        {/* 問題文 */}
        <div className="w-full max-w-xl border-2 border-blue-400 bg-white rounded-md px-4 py-2 text-center my-8">
          問題：円周率が円周率が3.05よりも大きいことを証明せよ。
        </div>
        <div className="relative w-full max-w-xl">
          {/* 入力ボックス */}
          <textarea
            rows={4}
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="回答を入力"
            className="w-full max-w-xl border border-gray-400 px-4 py-2 mb-4 rounded-md"
          />

          {/* 送信ボタン */}
          <button
            onClick={() => console.log("hogehoge")}
            className="absolute bottom-8 right-3 bg-black text-white px-3 py-1 rounded-full hover:bg-gray-800 transition"
          >
            ↑
          </button>
        </div>
        {/* 結果表示 */}
        <div className="w-full max-w-xl mt-2 border border-black bg-white rounded-md p-4">
          <p className="font-bold mb-2">AIによる解説</p>
          <div className="max-h-64 overflow-y-auto whitespace-pre-wrap text-sm leading-relaxed">
            {result || 'ここにAIの解説が表示されます'}
          </div>
        </div>
      </div>
    </div>
  )
}
