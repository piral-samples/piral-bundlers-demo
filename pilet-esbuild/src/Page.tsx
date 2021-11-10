import * as React from "react";
import * as emojis from "emojis-list";

const emojiList = emojis.default || emojis;

export default () => (
  <>
    <h1>{emojiList[2461]} Real Test Page (esbuild)</h1>
    <p>
      Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iusto non
      perferendis ut reiciendis, laudantium repellat quam voluptatum quaerat
      animi in soluta voluptate dignissimos rerum voluptates aperiam quisquam
      doloribus dolorum repellendus!
    </p>
    <img src={require("./tractor-red.jpg")} alt="Tractor" />
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis
      molestias ipsa expedita earum in placeat commodi soluta, voluptatibus
      labore possimus suscipit, totam sint adipisci molestiae aliquam quia autem
      necessitatibus ipsum.
    </p>
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo quis vitae,
      veniam sit incidunt in, dolorem alias repudiandae quibusdam fuga quam
      sapiente? Nihil, est. Libero exercitationem impedit quod quae
      reprehenderit!
    </p>
    <p>
      Lorem ipsum, dolor sit amet consectetur adipisicing elit. Similique totam
      ducimus nemo porro deserunt voluptates repellat molestiae assumenda
      exercitationem, voluptatem repellendus nam! Repudiandae fuga harum
      explicabo at perferendis fugit ipsa?
    </p>
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum sit quasi
      vel, quisquam deserunt ut atque! In, laboriosam at, debitis aut
      perspiciatis obcaecati earum nisi nulla recusandae, eligendi fuga
      inventore!
    </p>
    <p>
      Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cum a sapiente
      fuga quas iure delectus fugiat facilis minus adipisci nihil! Id odio
      facere mollitia voluptatibus illum, soluta aliquam repellat rem.
    </p>
  </>
);
