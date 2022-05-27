import { ReactComponent as RefundedIcon } from '../icons/refundedStatus.svg';
import { ReactComponent as SuccessIcon } from '../icons/successStatus.svg';
import { ReactComponent as PendingIcon } from '../icons/pendingStatus.svg';
import { ReactComponent as CancelledIcon } from '../icons/cancelledStatus.svg';
import React from "react";

// TODO: Consider using i18 or other translation framework
export default [
    {
        value: 'pending',
        label: 'Pending',
        color: 'warning',
        icon: PendingIcon   // Can't export the pending icon from figma
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
        value: 'cancelled',
        label: 'Cancelled',
        color: 'error',
        icon: CancelledIcon
    }
] as const;
