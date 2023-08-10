import React from 'react';

type Props = {
  total_count: number;
};

const Message: React.FC<Props> = ({ total_count }) => {
  return (
    <section id="message">
      {total_count !== -1 ? (
        <p>
          La recherche a donnée {total_count} résultat{total_count > 1 && 's'}
        </p>
      ) : (
        <p>Aucun dépot n&apos;a été trouvé</p>
      )}
    </section>
  );
};

export default Message;
