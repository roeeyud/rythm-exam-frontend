import { ReactComponent as RefundedIcon } from '../icons/refundedStatus.svg';
import { ReactComponent as SuccessIcon } from '../icons/successStatus.svg';

// TODO: Consider using i18 or other translation framework
export default [
    {
        value: 'pending',
        label: 'Pending',
        color: 'warning',
        icon: SuccessIcon
    },
    {
        value: 'paid',
        label: 'Paid',
        color: 'success',
        icon: SuccessIcon
    },
    {
        value: 'refunded',
        label: 'Refunded',
        color: 'default',
        icon: RefundedIcon,
    },
    {
        value: 'canceled',
        label: 'Canceled',
        color: 'error',
        icon: SuccessIcon
    }
]
