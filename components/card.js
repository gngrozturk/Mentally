import React, { useState } from "react";
import Image from "next/image";
import styles from "../styles/card.module.scss";
import Link from "next/link";

function Card({ title, src ,id}) {
  const slug = (title) => {
    let slug = title.toLowerCase();
    slug = slug.replaceAll(/ı/gi, "i");
    slug = slug.replaceAll(/ö/gi, "o");
    slug = slug.replaceAll(/ü/gi, "u");
    slug = slug.replaceAll(/ğ/gi, "g");
    slug = slug.replaceAll(/ç/gi, "c");
    slug = slug.replaceAll(/ş/gi, "s");
    // Trim the last whitespace
    slug = slug.replaceAll(/\s*$/g, "");
    // Change whitespace to "-"
    slug = slug.replaceAll(/\s+/g, "-");
    return slug;
  };

  return (
    <Link href="/disorders/[id]" as={`/disorders/${id}`}>
      <a>
        <div className={styles.container}>
          <div className={styles.imgContainer}>
            <Image layout="fill" src={src} alt={title} />
          </div>

          <h3 className={styles.cardTitle}>{title}</h3>
        </div>
      </a>
    </Link>
  );
}

export default Card;
