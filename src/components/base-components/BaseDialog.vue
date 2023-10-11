<script setup lang="ts">
defineProps({
  isShown: {
    type: Boolean,
    default: false,
  },
  width: {
    type: Number,
    default: 389,
  },
});
const emit = defineEmits(['cancel', 'accept', 'hide']);

function cancel() {
  emit('cancel');
}
function accept() {
  emit('accept');
}
function hide() {
  emit('hide');
}
</script>

<template>
  <div
    class="dialog"
    :class="{ hidden: !isShown }"
  >
    <div
      class="content"
      :style="{
        width: `${width}px`,
      }"
    >
      <div class="content_header">
        <slot name="content-header" />
        <div class="content_header-close" @click="hide()">
          <svg
            fill="none"
            height="24"
            viewBox="0 0 24 24"
            width="24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M5 5.00014L19 19M19 5L5 18.9999"
              stroke="#1C1C1C"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </div>
      </div>
      <div class="content_body">
        <slot name="content-body" />
      </div>
      <div class="content_footer">
        <div class="content_footer-cancel" @click="cancel()">
          <slot name="cancel-button" />
        </div>
        <div class="content_footer-accept" @click="accept()">
          <slot name="accept-button" />
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.dialog {
    position: fixed;
    display: flex;
    align-items: center;
    justify-content: center;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    z-index: 10;
    background: rgba(0, 0, 0, 0.5);
    box-sizing: border-box;
    *, *:before, *:after {
        box-sizing: inherit;
    }
    .content {
        display: flex;
        flex-direction: column;
        z-index: 3;
        height: fit-content;
        background: #FFFFFF;
        border-radius: 6px;
        max-height: calc(100vh - 40px);
        &_header {
            position: relative;
            padding: 24px;
            font-style: normal;
            font-weight: 600;
            font-size: 20px;
            line-height: 24px;
            letter-spacing: -0.02em;
            color: #1C1C1C;
            &-close {
                position: absolute;
                right: 16px;
                top: 16px;
                &:hover {
                    cursor: pointer;
                }
            }
        }
        &_body {
            height: fit-content;
            flex-grow: 1;
            overflow-y: auto;
            overflow-x: hidden;
            padding: 4px 24px;
        }
        &_footer {
            display: flex;
            justify-content: flex-end;
            padding: 24px;
            font-style: normal;
            font-weight: 500;
            font-size: 12px;
            line-height: 16px;
            letter-spacing: 0.04em;
            text-transform: uppercase;
            text-align: center;
            &-cancel {
                color: #1C1C1C;
                background: #E0E2D8;
            }
            &-accept {
                margin-left: 24px;
                min-width: 200px;
                color: #FFFFFF;
                background: #4B970F;
            }
            &-cancel, &-accept {
                padding: 12px 24px;
                border-radius: 6px;
                &:hover {
                    cursor: pointer;
                }
            }
        }
    }
    &.hidden {
        display: none;
    }
}
</style>
