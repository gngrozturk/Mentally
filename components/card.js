import React, { useState } from "react";
import Image from "next/image";
import styles from "../styles/card.module.scss";
import Link from "next/link";

function Card({ title, src }) {
  const slug = (title) => {
    const slug = title.toLowerCase();
    return slug;
  };

  return (
    <Link href="/diagnoses/[slug]" as={`/diagnoses/${slug(title)}`}>
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
