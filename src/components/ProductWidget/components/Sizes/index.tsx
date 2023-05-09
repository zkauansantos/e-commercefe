import { useState } from 'react';

import { CoatHanger, Ruler } from 'phosphor-react';

import { ContainerSizes } from './styles';

export default function Sizes() {
  const [checked, setChecked] = useState(-1);
  const [, setSizeSelected] = useState<null | number>(null);

  return (
    <ContainerSizes>
      <div className="sizes">
        <span>ESCOLHA O <strong>TAMANHO</strong></span>

        <div className="wrapper">
          {Array.from({ length: 16 }).map((_, i) => (
            <label
              key={Math.random()}
              className={`size ${checked === i ? 'checked' : ''}`}
              htmlFor={String(i)}
            >
              {34 + i}
              <input
                hidden
                type="checkbox"
                id={String(i)}
                onChange={() => {
                  setChecked(i);
                  setSizeSelected(34 + i);
                }}
              />
            </label>
          ))}
        </div>
      </div>

      <div className="find-you-size">
        <span><CoatHanger size={24} />Descubra seu tamanho</span>
        <span><Ruler size={24} />Tabela de medidas</span>
      </div>
    </ContainerSizes>
  );
}
