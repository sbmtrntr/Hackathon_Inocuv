'use client'

import { useState } from 'react'
import Image from 'next/image'
import { Client } from "@gradio/client";

export default function AnswerPage() {
  const [input, setInput] = useState('')
  const [result, setResult] = useState('')

  // const handleSubmit = async () => {
  //   // if (!input) return

  //   // try {
  //     // const res = await fetch('https://genai-app-our-growth-1-1751189839812-dcwwneccgq-uc.a.run.app/run/predict', {
  //     //   method: 'POST',
  //     //   headers: {
  //     //     'Content-Type': 'application/json',
  //     //   },
  //     //   body: JSON.stringify({
  //     //     data: [input], // Gradioに渡す形式（通常は配列）
  //     //   }),
  //     // })

  //     // const data = await res.json()
  //     // console.log('Gradio API レスポンス:', data)

  //     // // Gradioの出力は data.data[0] に入っている場合が多い
  //     // setResult(data.data[0])

  //     // setResult(response.data || '返答がありませんでした')

  //   // } catch (error) {
  //   //   console.error('Gradio API 呼び出し失敗:', error)
  //   //   // setResult('エラーが発生しました')
  //   // }

  // }

    const handleSubmit = async () => {
      console.log('入力:', input)
      const res = await fetch('/api/answer', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ input })
      })
    const data = await res.json()
    setResult(data.output)
  }




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
            onClick={handleSubmit}
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
