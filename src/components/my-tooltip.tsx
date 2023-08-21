import { Tooltip } from '@kobalte/core'
import './style.css'

const MyTooltip = () => (
  <Tooltip.Root>
    <Tooltip.Trigger class="tooltip__trigger">Trigger</Tooltip.Trigger>
    <Tooltip.Portal>
      <Tooltip.Content class="tooltip__content">
        <Tooltip.Arrow />
        <p>Tooltip content</p>
      </Tooltip.Content>
    </Tooltip.Portal>
  </Tooltip.Root>
)

export default MyTooltip