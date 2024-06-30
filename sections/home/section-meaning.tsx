import TitleSection from "@/components/home/title-section";
import { twMerge } from "tailwind-merge";

const SectionMeaning = () => {
  return (
    <section className="flex flex-col gap-y-5">
      <TitleSection title="Makna Dei Providentia" />
      <p className={twMerge("font-normal")}>
        <span className="text-blue-600 font-semibold">
          &quot;Dei Providentia&quot; berarti Tuhan memberikan semuanya.
        </span>
        <span> </span>
        Istilah ini menekankan bahwa segala sesuatu yang kita alami dan miliki
        adalah providence dari Tuhan, bukan sekedar kebetulan. Oleh karena itu,
        &quot;Dei Providentia&quot; mengajarkan kita untuk selalu berhati besar
        dalam berbagi, menghargai setiap pemberian, dan menyadari bahwa semua
        ini adalah bagian dari Penyelenggaraan Ilahi yang Maha Kuasa.
      </p>
    </section>
  );
};

export default SectionMeaning;
