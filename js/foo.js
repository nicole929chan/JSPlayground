
const MessageBox = {
  name: 'MessageBox',
  template: `
      <div class="message-box bg-white text-300_ vertical align-center justify-center">
        <slot name="icon"></slot>
        <slot name="title"></slot>
        <slot name="description"></slot>
        <div style="position: absolute; bottom: 32px;">
          <slot name="buttons"></slot>
        </div>
      </div>
    `
}

const BaseButton = {
  name: 'BaseButton',
  props: {
    textColor: {
      type: String,
      default: 'text-white'
    },
    bgColor: {
      type: String,
      default: 'bg-400'
    }
  },
  template: `
      <div class="base-button border-400 horizon justify-center align-center" :class="[textColor, bgColor]">
        <slot>確認</slot>
      </div>
    `,
}

const MainApp = {
  name: 'MainApp',
  components: {
    BaseButton,
    MessageBox
  },
  template: `
      <div>
        <h2>main app</h2>
        <div class="box">
          <div>
            <base-button>送出</base-button>
          </div>
          <div>
            <base-button>關閉</base-button>
          </div>
          <div>
            <base-button>兌換</base-button>
          </div>
          <div>
            <base-button>查看禮物券</base-button>
          </div>
          <div>
            <base-button textColor="text-400" bgColor="bg-white">取消</base-button>
          </div>
          <message-box>
            <template v-slot:description>
              提醒您 點數兌換後即不可回復，點數兌換需由服務人員操作。
            </template>
            <template v-slot:buttons>
              <div class="my-6" @click="redeem">
                <base-button>兌換</base-button>
              </div>
              <div @click="cancel">
                <base-button textColor="text-400" bgColor="bg-white">取消</base-button>
              </div>
            </template>
          </message-box>
        </div>
      </div>
    `,
  methods: {
    redeem() {
      alert('兌換...')
    },
    cancel() {
      alert('取消...')
    }
  }
}


const app = new Vue({
  el: '#app',
  components: {
    MainApp
  },
  template: `
      <div class="contain">
        <h1>Hello World</h1>
        <main-app></main-app>
      </div>
    `
})