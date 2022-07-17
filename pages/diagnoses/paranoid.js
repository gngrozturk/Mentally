import React from "react";
import Checklist from "../../components/checkList";
import Layout from "../../components/layout";

function Paranoid() {
  return (
    <Layout>
      <div>
        <h1>Paranoid Personality Disorder</h1>
        <Checklist
          questions={[
            "Yeterli bir temele dayanmadan başkalarının kendisini sömürdüğünden, aldattığından veya kendine zarar verdiğinden kuşkulanır.",
            "Dostlarının veya iş arkadaşlarının kendine olan bağlılığı veya güvenirliği üzerine yersiz kuşkuları vardır.",
            "Söylediklerinin kendisine karşı kötü niyetle kullanılacağından yersiz korkuları olduğundan başkalarına sır vermek istemez.",
          ]}
        />
      </div>
    </Layout>
  );
}

export default Paranoid;
