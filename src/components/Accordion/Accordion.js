import React, { useEffect, useReducer, useState } from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import './Accordion.scss'
import AccordionItem from './AccordionItem'

const Accordion = ({ className, children }) => {
  const [openSections, setOpenSections] = useState({})
  /* eslint-disable */
  const [ignored, forceUpdate] = useReducer(x => x + 1, 0);

  useEffect(() => {
    children.forEach(child => {
      openSections[child.props.title] = child.props.isOpen ? true : false;
    });
    setOpenSections(openSections);
    forceUpdate();
  }, []);

  function onClick(item) {
    openSections[item.props.title] = !openSections[item.props.title];
    setOpenSections(openSections);
    forceUpdate();
  }

  return <div className={classNames('accordion', className)}>
    {children && children.map((item, index) => {
      return <AccordionItem key={index} title={item.props.title} content={item.props.content} isChecked={item.props.isChecked} onClick={() => {
        onClick(item)
      }}
                            isOpen={openSections[item.props.title]} selection={item.props.selection}>{item.props.children}</AccordionItem>
    })}
  </div>
}

Accordion.propTypes = {
  className: PropTypes.string,
  children: PropTypes.any
};

Accordion.defaultProps = {
  className: "",
}

export default Accordion;
