import style from './test.css'
import * as DOM from './utils/DOM'


@DOM.define('my-test')
export class MyTest extends DOM.Component {
  createTemplate () {
    return <>
      <link href={style} rel="stylesheet" />
      <div className="test">oi</div>
    </>
  }
}
