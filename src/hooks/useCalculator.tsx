import React, {
  createContext,
  ReactNode,
  useState,
  useEffect,
  useContext,
} from 'react';

import { ItemDTO } from '../database/dtos/ItemDTO';

interface Props {
  children: ReactNode;
}

interface CalculatorContextType {
  addItem: (item: ItemDTO) => void;
  bestDeal: ItemDTO;
  items: ItemDTO[];
}

const CalculatorContext = createContext({} as CalculatorContextType);

export const useCalculator = () => useContext(CalculatorContext);

export function CalculatorProvider({ children }: Props) {
  const [items, setItems] = useState<ItemDTO[]>([] as ItemDTO[]);
  const [bestDeal, setBestDeal] = useState<ItemDTO>({} as ItemDTO);

  function addItem(item: ItemDTO) {
    setItems(prev => [...prev, item]);
  }

  function compareItems() {
    if(items.length === 1) {
      return setBestDeal(items[0]);
    }

    if(items.length === 0) return;

    const bestDealItem = items.reduce((prev, current) => {
      const minValue = Math.min(prev.relativePrice, current.relativePrice);
      return prev.relativePrice === minValue ? prev : current;
    });

    setBestDeal(bestDealItem);
  }

  useEffect(() => {
    compareItems();
  }, [items]);

  return (
    <CalculatorContext.Provider value={{
      addItem,
      bestDeal,
      items,
    }}>
      {children}
    </CalculatorContext.Provider>
  );
}
