/**
* This code was generated by v0 by Vercel.
* @see https://v0.dev/t/glSBTQGFWLq
* Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
*/

/** Add fonts into your Next.js project:

import { Cormorant_Garamond } from 'next/font/google'
import { Chivo } from 'next/font/google'

cormorant_garamond({
  subsets: ['latin'],
  display: 'swap',
})

chivo({
  subsets: ['latin'],
  display: 'swap',
})

To read more about using these font, please visit the Next.js documentation:
- App Directory: https://nextjs.org/docs/app/building-your-application/optimizing/fonts
- Pages Directory: https://nextjs.org/docs/pages/building-your-application/optimizing/fonts
**/
import Link from "next/link"
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar"

export function Lp() {
  return (
    <div className="flex flex-col min-h-screen">
      <section className="bg-primary text-primary-foreground py-20 md:py-32">
        <div className="container px-4 md:px-6">
          <div className="grid gap-8 md:grid-cols-2 items-center">
            <div className="space-y-6">
              <h1 className="text-4xl md:text-5xl font-bold">産業廃棄物回収の課題を解決する</h1>
              <p className="text-lg md:text-xl">配車管理SaaSで業務の効率化と生産性向上を実現</p>
              <div className="flex gap-4">
                <Link
                  href="#"
                  className="inline-flex h-10 items-center justify-center rounded-md bg-primary-foreground px-6 text-sm font-medium text-primary shadow transition-colors hover:bg-primary-foreground/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                  prefetch={false}
                >
                  無料トライアル
                </Link>
                <Link
                  href="#"
                  className="inline-flex h-10 items-center justify-center rounded-md border border-primary-foreground bg-primary px-6 text-sm font-medium text-primary-foreground shadow-sm transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                  prefetch={false}
                >
                  お問い合わせ
                </Link>
              </div>
            </div>
            <img
              src="/placeholder.svg"
              width="600"
              height="400"
              alt="Hero Image"
              className="mx-auto aspect-video overflow-hidden rounded-xl object-cover"
            />
          </div>
        </div>
      </section>
      <section className="bg-muted py-12 md:py-24">
        <div className="container px-4 md:px-6">
          <div className="grid gap-8 md:grid-cols-2">
            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold">主な機能と導入効果</h2>
              <p className="text-muted-foreground text-lg md:text-xl">配車管理SaaSで業務の効率化と生産性向上を実現</p>
            </div>
            <div className="grid gap-6">
              <div className="grid gap-2">
                <h3 className="text-xl font-bold">配車計画の最適化</h3>
                <p className="text-muted-foreground">
                  配車計画の立案から実行まで一元管理。最適なルート配車で業務効率を向上
                </p>
              </div>
              <div className="grid gap-2">
                <h3 className="text-xl font-bold">リアルタイムの状況把握</h3>
                <p className="text-muted-foreground">配車状況をリアルタイムで確認。迅速な対応と顧客満足度の向上</p>
              </div>
              <div className="grid gap-2">
                <h3 className="text-xl font-bold">業務の見える化</h3>
                <p className="text-muted-foreground">配車実績や稼働状況の可視化で、無駄な業務の削減と生産性の向上</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="py-12 md:py-24">
        <div className="container px-4 md:px-6">
          <div className="grid gap-8 md:grid-cols-2">
            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold">実績と顧客の声</h2>
              <p className="text-muted-foreground text-lg md:text-xl">多くの産業廃棄物回収業者に導入いただいています</p>
            </div>
            <div className="grid gap-6">
              <div className="grid gap-4 bg-muted rounded-lg p-6">
                <div className="flex items-center gap-4">
                  <Avatar>
                    <AvatarImage src="/placeholder-user.jpg" />
                    <AvatarFallback>JD</AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="text-lg font-medium">株式会社ABC</p>
                    <p className="text-muted-foreground">廃棄物回収部門</p>
                  </div>
                </div>
                <p className="text-muted-foreground">
                  配車管理SaaSを導入して、業務の効率化と生産性の向上が実現しました。
                  リアルタイムの状況把握と最適な配車計画で、顧客満足度も大幅に向上しています。
                </p>
              </div>
              <div className="grid gap-4 bg-muted rounded-lg p-6">
                <div className="flex items-center gap-4">
                  <Avatar>
                    <AvatarImage src="/placeholder-user.jpg" />
                    <AvatarFallback>KT</AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="text-lg font-medium">株式会社XYZ</p>
                    <p className="text-muted-foreground">業務管理部</p>
                  </div>
                </div>
                <p className="text-muted-foreground">
                  配車管理SaaSを導入して、業務の見える化が進み、無駄な業務の削減と生産性の向上につながりました。
                  導入後の業績向上は目覚ましいものがあります。
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-primary text-primary-foreground py-12 md:py-24">
        <div className="container px-4 md:px-6 text-center">
          <div className="space-y-6 max-w-xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold">さあ、始めましょう</h2>
            <p className="text-lg md:text-xl">無料トライアルでサービスの機能と導入効果を体験できます。</p>
            <div className="flex justify-center gap-4">
              <Link
                href="#"
                className="inline-flex h-10 items-center justify-center rounded-md bg-primary-foreground px-6 text-sm font-medium text-primary shadow transition-colors hover:bg-primary-foreground/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                prefetch={false}
              >
                無料トライアル
              </Link>
              <Link
                href="#"
                className="inline-flex h-10 items-center justify-center rounded-md border border-primary-foreground bg-primary px-6 text-sm font-medium text-primary-foreground shadow-sm transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                prefetch={false}
              >
                お問い合わせ
              </Link>
            </div>
          </div>
        </div>
      </section>
      <footer className="bg-muted py-6 w-full shrink-0">
        <div className="container px-4 md:px-6 flex flex-col md:flex-row items-center justify-between">
          <p className="text-xs text-muted-foreground">&copy; 2024 株式会社ABC. All rights reserved.</p>
          <nav className="flex gap-4 sm:gap-6">
            <Link href="#" className="text-xs hover:underline underline-offset-4" prefetch={false}>
              利用規約
            </Link>
            <Link href="#" className="text-xs hover:underline underline-offset-4" prefetch={false}>
              プライバシーポリシー
            </Link>
          </nav>
        </div>
      </footer>
    </div>
  )
}
