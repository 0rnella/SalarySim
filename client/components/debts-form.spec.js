/* global describe beforeEach it */

import {expect} from 'chai'
import React from 'react'
import enzyme, {shallow} from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import {Debts} from '.'

const adapter = new Adapter()
enzyme.configure({adapter})

describe('Debts form', () => {
  let debtsForm

  beforeEach(() => {
    debtsForm = shallow(<Debts />)
  })

  it('renders the title', () => {
    expect(debtsForm.find('h3').text()).to.be.equal('Your debts:')
  })

})
