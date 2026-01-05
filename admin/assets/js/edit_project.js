// Service management
        let serviceCount = 0;

        function addService ( name = '', icon = 'fi-rr-briefcase' )
        {
            serviceCount++;
            const servicesContainer = document.getElementById( 'servicesContainer' );

            const serviceItem = document.createElement( 'div' );
            serviceItem.className = 'service-item p-4 border border-gray-200 dark:border-gray-700 rounded-xl';
            serviceItem.innerHTML = `
        <div class="flex items-center gap-4 mb-4">
            <div class="flex-1">
                <label class="block text-sm font-medium text-gray-800 dark:text-gray-100 mb-2">
                    Service Name
                </label>
                <input type="text" name="service_name[]" value="${ name }" required
                    class="w-full px-3 py-2 text-sm text-gray-800 dark:text-gray-100 outline-none border border-gray-300 focus:border-primary dark:focus:border-primary dark:border-gray-700 rounded-lg bg-gray-50 dark:bg-gray-700"
                    placeholder="UX Research">
            </div>
            <div class="flex-1">
                <label class="block text-sm font-medium text-gray-800 dark:text-gray-100 mb-2">
                    Icon
                </label>
                <select name="service_icon[]" required
                    class="w-full px-3 py-2 text-sm text-gray-800 dark:text-gray-100 outline-none border border-gray-300 focus:border-primary dark:focus:border-primary dark:border-gray-700 rounded-lg bg-gray-50 dark:bg-gray-700">
                    <option value="fi-rr-search" ${ icon === 'fi-rr-search' ? 'selected' : '' }>Search (UX Research)</option>
                    <option value="fi-rr-palette" ${ icon === 'fi-rr-palette' ? 'selected' : '' }>Palette (UI Design)</option>
                    <option value="fi-rr-computer" ${ icon === 'fi-rr-computer' ? 'selected' : '' }>Computer (Development)</option>
                    <option value="fi-rr-mobile" ${ icon === 'fi-rr-mobile' ? 'selected' : '' }>Mobile (Mobile Dev)</option>
                    <option value="fi-rr-chart-pie" ${ icon === 'fi-rr-chart-pie' ? 'selected' : '' }>Chart (Analytics)</option>
                    <option value="fi-rr-test-tube" ${ icon === 'fi-rr-test-tube' ? 'selected' : '' }>Test Tube (Testing)</option>
                    <option value="fi-rr-rocket" ${ icon === 'fi-rr-rocket' ? 'selected' : '' }>Rocket (Launch)</option>
                    <option value="fi-rr-users" ${ icon === 'fi-rr-users' ? 'selected' : '' }>Users (Team)</option>
                    <option value="fi-rr-lightbulb" ${ icon === 'fi-rr-lightbulb' ? 'selected' : '' }>Lightbulb (Strategy)</option>
                    <option value="fi-rr-briefcase" ${ icon === 'fi-rr-briefcase' ? 'selected' : '' }>Briefcase (Consulting)</option>
                </select>
            </div>
            <button type="button" onclick="removeService(this)" class="mt-6 text-red-500 hover:text-red-700">
                <i class="fi fi-rr-trash"></i>
            </button>
        </div>
    `;

            servicesContainer.appendChild( serviceItem );
        }

        function removeService ( button )
        {
            if ( document.querySelectorAll( '.service-item' ).length > 1 )
            {
                button.closest( '.service-item' ).remove();
            } else
            {
                alert( 'At least one service is required.' );
            }
        }

        // Metric management
        let metricCount = 0;

        function addMetric ( value = '', label = '' )
        {
            metricCount++;
            const metricsContainer = document.getElementById( 'metricsContainer' );

            const metricItem = document.createElement( 'div' );
            metricItem.className = 'metric-item p-4 border border-gray-200 dark:border-gray-700 rounded-xl';
            metricItem.innerHTML = `
        <div class="flex items-center gap-4 mb-4">
            <div class="flex-1">
                <label class="block text-sm font-medium text-gray-800 dark:text-gray-100 mb-2">
                    Metric Value
                </label>
                <input type="text" name="metric_value[]" value="${ value }" required
                    class="w-full px-3 py-2 text-sm text-gray-800 dark:text-gray-100 outline-none border border-gray-300 focus:border-primary dark:focus:border-primary dark:border-gray-700 rounded-lg bg-gray-50 dark:bg-gray-700"
                    placeholder="35%">
            </div>
            <div class="flex-1">
                <label class="block text-sm font-medium text-gray-800 dark:text-gray-100 mb-2">
                    Metric Label
                </label>
                <input type="text" name="metric_label[]" value="${ label }" required
                    class="w-full px-3 py-2 text-sm text-gray-800 dark:text-gray-100 outline-none border border-gray-300 focus:border-primary dark:focus:border-primary dark:border-gray-700 rounded-lg bg-gray-50 dark:bg-gray-700"
                    placeholder="Increase in conversion rate">
            </div>
            <button type="button" onclick="removeMetric(this)" class="mt-6 text-red-500 hover:text-red-700">
                <i class="fi fi-rr-trash"></i>
            </button>
        </div>
    `;

            metricsContainer.appendChild( metricItem );
        }

        function removeMetric ( button )
        {
            if ( document.querySelectorAll( '.metric-item' ).length > 1 )
            {
                button.closest( '.metric-item' ).remove();
            } else
            {
                alert( 'At least one metric is required.' );
            }
        }

        // Load project data
        async function loadProjectData ( projectId )
        {
            try
            {
                const response = await fetch( `/api/projects/${ projectId }/edit` );
                const result = await response.json();

                if ( result.success )
                {
                    const project = result.project;

                    // Fill form fields
                    document.getElementById( 'project_id' ).value = project.id;
                    document.getElementById( 'testimonial_id' ).value = project.testimonial_id;

                    // Hero section
                    document.getElementById( 'category_badge' ).value = project.category_badge || '';
                    document.getElementById( 'title' ).value = project.title || '';
                    document.getElementById( 'excerpt' ).value = project.excerpt || '';
                    document.getElementById( 'client_name' ).value = project.client_name || '';
                    document.getElementById( 'project_year' ).value = project.project_year || '';
                    document.getElementById( 'services' ).value = project.services || '';
                    document.getElementById( 'project_duration' ).value = project.project_duration || '';
                    document.getElementById( 'live_url' ).value = project.live_url || '';
                    document.getElementById( 'cover_image' ).value = project.cover_image_url || '';

                    // Project overview
                    document.getElementById( 'overview_content' ).value = project.overview_content || '';
                    document.getElementById( 'challenges' ).value = project.challenges || '';
                    document.getElementById( 'approach' ).value = project.approach || '';

                    // Research section
                    document.getElementById( 'research_badge' ).value = project.research_badge || '';
                    document.getElementById( 'research_title' ).value = project.research_title || '';
                    document.getElementById( 'user_insights' ).value = project.user_insights || '';
                    document.getElementById( 'competitive_analysis' ).value = project.competitive_analysis || '';

                    // Design solutions
                    document.getElementById( 'design_badge' ).value = project.design_badge || '';
                    document.getElementById( 'design_title' ).value = project.design_title || '';
                    document.getElementById( 'gallery_images' ).value = project.gallery_images || '';
                    document.getElementById( 'design_content' ).value = project.design_content || '';
                    document.getElementById( 'key_improvements' ).value = project.key_improvements || '';

                    // Sidebar highlights
                    document.getElementById( 'sidebar_timeline' ).value = project.sidebar_timeline || '';
                    document.getElementById( 'sidebar_team' ).value = project.sidebar_team || '';
                    document.getElementById( 'sidebar_platform' ).value = project.sidebar_platform || '';
                    document.getElementById( 'sidebar_key_metrics' ).value = project.sidebar_key_metrics || '';

                    // Tags
                    document.getElementById( 'tags' ).value = project.tags || '';

                    // Results
                    document.getElementById( 'results_content' ).value = project.results_content || '';

                    // Testimonial
                    document.getElementById( 'testimonial_quote' ).value = project.testimonial_quote || '';
                    document.getElementById( 'testimonial_client' ).value = project.testimonial_client || '';
                    document.getElementById( 'testimonial_title' ).value = project.testimonial_title || '';
                    document.getElementById( 'testimonial_avatar' ).value = project.testimonial_avatar || '';

                    // Load services
                    const servicesContainer = document.getElementById( 'servicesContainer' );
                    servicesContainer.innerHTML = '';
                    if ( project.services_list && project.services_list.length > 0 )
                    {
                        project.services_list.forEach( service =>
                        {
                            addService( service.service_name, service.icon_class );
                        } );
                    } else
                    {
                        addService(); // Add one empty service
                    }

                    // Load metrics
                    const metricsContainer = document.getElementById( 'metricsContainer' );
                    metricsContainer.innerHTML = '';
                    if ( project.metrics_list && project.metrics_list.length > 0 )
                    {
                        project.metrics_list.forEach( metric =>
                        {
                            addMetric( metric.metric_value, metric.metric_label );
                        } );
                    } else
                    {
                        addMetric(); // Add one empty metric
                    }

                    // Show form
                    document.getElementById( 'loadingState' ).classList.add( 'hidden' );
                    document.getElementById( 'editFormContainer' ).classList.remove( 'hidden' );

                } else
                {
                    alert( 'Error loading project: ' + result.message );
                    window.location.href = '/projects';
                }
            } catch ( error )
            {
                console.error( 'Error loading project:', error );
                alert( 'Failed to load project data.' );
                window.location.href = '/projects';
            }
        }

        // Form submission
        document.getElementById( 'editProjectForm' ).addEventListener( 'submit', async function ( e )
        {
            e.preventDefault();

            const formData = new FormData( this );
            const data = Object.fromEntries( formData.entries() );

            // Convert arrays for services and metrics
            data.services_list = [];
            data.metrics_list = [];

            // Collect services
            const serviceNames = document.querySelectorAll( 'input[name="service_name[]"]' );
            const serviceIcons = document.querySelectorAll( 'select[name="service_icon[]"]' );
            serviceNames.forEach( ( input, index ) =>
            {
                if ( input.value.trim() )
                {
                    data.services_list.push( {
                        service_name: input.value.trim(),
                        icon_class: serviceIcons[ index ].value
                    } );
                }
            } );

            // Collect metrics
            const metricValues = document.querySelectorAll( 'input[name="metric_value[]"]' );
            const metricLabels = document.querySelectorAll( 'input[name="metric_label[]"]' );
            metricValues.forEach( ( input, index ) =>
            {
                if ( input.value.trim() )
                {
                    data.metrics_list.push( {
                        metric_value: input.value.trim(),
                        metric_label: metricLabels[ index ].value.trim()
                    } );
                }
            } );

            try
            {
                const response = await fetch( '/api/projects/update', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify( data )
                } );

                const result = await response.json();

                if ( result.success )
                {
                    alert( 'Project updated successfully!' );
                    window.location.href = `/project/${ result.project_slug }`;
                } else
                {
                    alert( 'Error: ' + result.message );
                }
            } catch ( error )
            {
                console.error( 'Error:', error );
                alert( 'An error occurred while updating the project.' );
            }
        } );

        // Save draft
        document.getElementById( 'saveDraft' ).addEventListener( 'click', async function ()
        {
            const formData = new FormData( document.getElementById( 'editProjectForm' ) );
            const data = Object.fromEntries( formData.entries() );
            data.status = 'draft';

            try
            {
                const response = await fetch( '/api/projects/update', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify( data )
                } );

                const result = await response.json();

                if ( result.success )
                {
                    alert( 'Project saved as draft!' );
                } else
                {
                    alert( 'Error: ' + result.message );
                }
            } catch ( error )
            {
                console.error( 'Error:', error );
                alert( 'An error occurred while saving the draft.' );
            }
        } );

        // Get project ID from URL
        // function getProjectIdFromUrl ()
        // {
        //     const path = window.location.pathname;
        //     const match = path.match( /\/edit-project\/(\d+)/ );
        //     return match ? match[ 1 ] : null;
        // }

        // Initialize page
        // document.addEventListener( 'DOMContentLoaded', function ()
        // {
        //     const projectId = getProjectIdFromUrl();
        //     if ( projectId )
        //     {
        //         loadProjectData( projectId );
        //     } else
        //     {
        //         alert( 'Project ID not found in URL.' );
        //         window.location.href = '/projects';
        //     }
        // } );