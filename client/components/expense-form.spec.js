/* global describe beforeEach it */

import {expect} from 'chai'
import React from 'react'
import enzyme, {shallow} from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import {Expenses} from '.'

const adapter = new Adapter()
enzyme.configure({adapter})

describe('Expenses Form', () => {
  let expensesForm

  beforeEach(() => {
    expensesForm = shallow(<Expenses />)
  })

  it('renders 8 categories under h5 headings', () => {
    expect(expensesForm.find('h5').text()).to.be.equal('Rent')
  })

})
