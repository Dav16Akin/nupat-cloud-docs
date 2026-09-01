import { DocsLayout } from 'fumadocs-ui/layouts/docs';
import type { ReactNode } from 'react';
import { source } from '@/app/source';
import Image from 'next/image';

export default function RootDocsLayout({ children }: { children: ReactNode }) {
  return (
    <DocsLayout
      tree={source.pageTree}
      nav={{
        title: (
          <div className="flex items-center gap-2">
            <Image
              src="/nupat_cloud_logo-nav.png"
              alt="Nupat Cloud Logo"
              width={130}
              height={28}
              className="h-7 w-auto object-contain dark:brightness-110"
              priority
            />
            <span className="text-xs font-semibold px-2 py-0.5 rounded-full bg-[#1787d4]/10 text-[#1787d4] dark:bg-[#1787d4]/20 border border-[#1787d4]/20">
              Docs
            </span>
          </div>
        ),
        url: '/docs',
      }}
      links={[
        { text: 'Main Website', url: 'https://nupatcloud.com', external: true },
        { text: 'Client Dashboard', url: 'https://nupatcloud.com/dashboard', external: true },
      ]}
    >
      {children}
    </DocsLayout>
  );
}
