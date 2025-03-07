import _React, { FC } from 'react';
import { Button, Card } from 'antd';
import { CardItemTypes } from '../types/CardItemTypes';
import { useNavigate } from 'react-router-dom';
import { useQueryClient } from '@tanstack/react-query';
const { Meta } = Card;

const CostumCard: FC<{ item: CardItemTypes, isBack?:boolean }> = ({ item , isBack }) => {
  const navigate = useNavigate()
  const queryClient = useQueryClient()
  

  function handleNavigateSingle() {
  if (!isBack){
    navigate(`${item.id}`)
    queryClient.invalidateQueries({queryKey:["product"]})
  }
  else{
    navigate(-1)
  }
  }

  return (
    <Card
      hoverable
      style={{ width: 240, height: 390 }}
      cover={<img alt={item?.title} src={item?.images?.[0]} />}
    >
      <Meta title={item?.title} description={<p className='line-clamp-2'>{item?.description}</p>} />
      <Button onClick={handleNavigateSingle} type='primary' className='mt-2'>{isBack ? "Back" : "More"}</Button>
    </Card>
  )

};

export default CostumCard;