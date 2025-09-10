import React from 'react';
import {Skeleton} from "@/components/ui/skeleton.jsx";
import {
    Sidebar,
    SidebarHeader,
    SidebarContent,
    SidebarFooter,
    SidebarGroup,
    SidebarGroupLabel,
    SidebarMenu,
    SidebarMenuButton,
    SidebarMenuItem,
    SidebarMenuSub,
    SidebarMenuSubButton,
    SidebarMenuSubItem,
    SidebarGroupContent,
} from "@/components/ui/sidebar"
import {SidebarProvider} from "@/components/ui/sidebar.jsx";
import {SidebarInset, SidebarTrigger} from "@/components/ui/sidebar.jsx";


function Loading(props) {
    return (
        <>
            <SidebarProvider>
                <Sidebar>
                </Sidebar>
                <SidebarInset>
                    <header
                        className="flex h-16 shrink-0 items-center gap-2 transition-[width,height] ease-linear group-has-data-[collapsible=icon]/sidebar-wrapper:h-12">
                        <div className="flex items-center gap-2 px-4">
                            <Skeleton className="h-4 w-[250px]"/>
                        </div>
                    </header>
                    <div className="flex flex-wrap gap-4 p-4 pt-0">
                        {[1, 2, 3, 4, 5].map((ele,i) => (
                            <div key={i} className="flex-1/4 flex flex-col space-y-3">
                                <Skeleton className="h-[200px] w-full rounded-xl"/>
                                <div className="space-y-2">
                                    <Skeleton className="h-4 w-[250px]"/>
                                    <Skeleton className="h-4 w-[200px]"/>
                                </div>
                            </div>

                        ))}

                    </div>
                </SidebarInset>
            </SidebarProvider>
        </>
    );
}

export default Loading;