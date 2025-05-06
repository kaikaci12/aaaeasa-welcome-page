import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Head from "next/head";

const aaaLocations: Record<string, { title: string; description: string }> = {
  uk: {
    title: "AAA UK",
    description: "AAA's operations in the United Kingdom...",
  },
  belgium: {
    title: "AAA Belgium",
    description: "AAA's services in Belgium...",
  },
  india: {
    title: "AAA India",
    description: "AAA's contributions in India...",
  },
  // Add more as needed
};

export default function AAADetailPage() {
  const router = useRouter();
  const { location } = router.query;

  const [data, setData] = useState<{
    title: string;
    description: string;
  } | null>(null);

  useEffect(() => {
    if (typeof location === "string") {
      const lower = location.toLowerCase();
      if (aaaLocations[lower]) {
        setData(aaaLocations[lower]);
      } else {
        setData(null);
      }
    }
  }, [location]);

  if (!data) return <p>Loading or location not found.</p>;

  return (
    <>
      <Head>
        <title>{data.title}</title>
        <meta name="description" content={data.description} />
      </Head>
      <div className="p-6">
        <h1 className="text-3xl font-bold">{data.title}</h1>
        <p className="mt-4 text-lg">{data.description}</p>
      </div>
    </>
  );
}
