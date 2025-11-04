import Image from "next/image";

interface GalleryImage {
  src: string;
  alt: string;
}

export default function Gallery({ images }: { images: GalleryImage[] }) {
  return (
    <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3">
      {images.map((img, idx) => (
        <div key={idx} className="relative aspect-[4/3] overflow-hidden rounded-2xl border">
          <Image
            src={img.src}
            alt={img.alt}
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            className="object-cover"
          />
        </div>
      ))}
    </div>
  );
}
