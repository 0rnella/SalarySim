/* global describe beforeEach it */

import {expect} from 'chai'
import React from 'react'
import enzyme, {shallow} from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import {DebtsList} from '.'

const adapter = new Adapter()
enzyme.configure({adapter})

describe('DebtsList', () => {
  let debtsListComponent

  beforeEach(() => {
    debtsListComponent = shallow(<DebtsList debtsList={[{
        debtType: 'Grace Hopper Program',
        amount: 16910,
        timeline: 9
      }, {
        debtType: 'Family',
        amount: 5000,
        timeline: 12
      }]} />)
  })

  it('has as many divs as there are debts in the array', () => {
    expect(debtsListComponent.findAll())
  })

})
