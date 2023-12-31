import { styled } from 'styled-components'
import { cores } from '../../styles'

export const Card = styled.div`
  width: 472px;
  border: 1px solid ${cores.orange};
  color: ${cores.orange};
  background-color: ${cores.white};
  position: relative;

  p {
    height: 110px;
    font-size: 14px;
    font-weight: 400;
    line-height: 22px;
    margin: 16px 4px;
  }
`
export const FoodImage = styled.img`
  width: 100%;
  height: 250px;
  object-fit: cover;
`

export const Rating = styled.div`
  display: flex;
  margin-right: 4px;
`
export const Name = styled.div`
  display: flex;
  justify-content: space-between;

  h2 {
    text-align: center;
    font-size: 18px;
    font-style: normal;
    font-weight: 700;
    margin: 0 4px 0 4px;
  }
`
export const Infos = styled.div`
  position: absolute;
  top: 16px;
  right: 16px;
`
