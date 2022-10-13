import React, { useEffect } from 'react'
import _ from 'lodash'

import txt from '../../constants/table'

const Temp = () => {
  useEffect(() => {
    setTimeout(() => {
      /*
            const newData = _.map(txt, (item) => {
                const keys = item.keys;
                const borderType = item.borderType;
                let areas = [];
                if (borderType === 'group') {
                    let ars = [];
                    keys.map((id) => {
                        const elem = document.getElementById('a-' + id).getBBox();
                        const div = document.createElement("div");
                        div.style.top = elem.y + 'px';
                        div.style.left = elem.x + 'px';
                        div.style.width = 66 + 'px';
                        div.style.height = 36 + 'px';
                        //document.getElementById('table-borders').appendChild(div);
                        ars.push({x: elem.x, y: elem.y, w: elem.width, h: elem.height});
                    });
                    areas.push(...ars);
                } else if (borderType === 'custom') {
                    //document.getElementById('border-' + keys.join('-')).classList.add('show');
                } else {
                    const items = keys.map((id) => {
                        const elem = document.getElementById('a-' + id).getBBox();
                        return {x: elem.x, y: elem.y, w: elem.width, h: elem.height}
                    });
                    const x = _.minBy(items, 'x').x;
                    const y = _.minBy(items, 'x').y;
                    const xSize = _.size(_.groupBy(items, function (b) {
                        return b.x
                    }))
                    const ySize = _.size(_.groupBy(items, function (b) {
                        return b.y
                    }))

                    areas.push({x: x, y: y, w: (((xSize) * 64) + 2), h: (((ySize) * 34) + 2)});

                    //document.getElementById('table-borders').appendChild(div);
                }

                item.areas = areas;
                return item;
            })
            */

      const newData = _.map(txt, (item) => {
        const keys = item.keys

        item.area = {}

        if (keys.length === 1 && keys[0] !== 0) {
          const elem = document.getElementById('a-' + keys[0]).getBBox()
          item.area = { x: elem.x, y: elem.y, w: elem.width, h: elem.height }
        }
        return item
      })

      // console.log(newData, 'newData');
    }, 2000)
  }, [])

  return <></>
}

Temp.propTypes = {}

export default Temp
