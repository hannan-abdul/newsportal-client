export const dashboard_nav =[
    {
        id: 1,
        path: "/",
        pathname: "Home",
        size: 'text-2xl',
        role: ['admin','user']
    },
    {
        id: 2,
        path: "/dashboard/write-news",
        pathname: "Write News",
        role: ['admin', 'user']
    },
    {
        id: 3,
        path: "/dashboard/manage-news",
        pathname: "Manage News",
        role: ['admin','user']
    },
    {
        id: 4,
        path: "/dashboard/manage-category",
        pathname: "Manage Category",
        role: ['admin']
    }
]