import Edit from './Edit';

export const EditPlansConfig = {
    settings: {
        layout: {
            config: {
                footer: {
                    display: false
                }
            }
        }
    },
    routes  : [
        {
            path     : '/admin/plans/edit/',
            component: Edit
        }
    ]
};

/**
 * Lazy load Example
 */
/*
import FuseLoadable from '@fuse/components/FuseLoadable/FuseLoadable';

export const ExampleConfig = {
    settings: {
        layout: {
            config: {}
        }
    },
    routes  : [
        {
            path     : '/example',
            component: FuseLoadable({
                loader: () => import('./Example')
            })
        }
    ]
};
*/
