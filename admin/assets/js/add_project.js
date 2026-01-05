// Service management
        let serviceCount = 1;

        function addService ()
        {
            serviceCount++;
            const servicesContainer = document.getElementById( 'servicesContainer' );

            const serviceItem = document.createElement( 'div' );
            serviceItem.className = 'service-item gr p-4 border border-gray-200 dark:border-gray-700 rounded-xl mt-4';
            serviceItem.innerHTML = `
        <div class="relative flex items-center sm:flex-row flex-col gap-4 mb-4">
            <div class="w-full flex-1">
                <label class="block text-sm font-medium text-gray-800 dark:text-gray-100 mb-2">
                    Service Name
                </label>
                <input type="text" name="service_name[]" required
                    class="w-full px-3 py-2 text-sm text-gray-800 dark:text-gray-100 outline-none border border-gray-300 focus:border-primary dark:focus:border-primary dark:border-gray-700 rounded-lg bg-gray-50 dark:bg-gray-700"
                    placeholder="UI Design">
            </div>
            <div class="w-full flex-1">
                <label class="block text-sm font-medium text-gray-800 dark:text-gray-100 mb-2">
                    Icon
                </label>
                <select name="service_icon[]" required
                    class="w-full px-3 py-2 text-sm text-gray-800 dark:text-gray-100 outline-none border border-gray-300 focus:border-primary dark:focus:border-primary dark:border-gray-700 rounded-lg bg-gray-50 dark:bg-gray-700">
                    <option value="fi-rr-search">Search (UX Research)</option>
                    <option value="fi-rr-palette">Palette (UI Design)</option>
                    <option value="fi-rr-computer">Computer (Development)</option>
                    <option value="fi-rr-mobile">Mobile (Mobile Dev)</option>
                    <option value="fi-rr-chart-pie">Chart (Analytics)</option>
                    <option value="fi-rr-test-tube">Test Tube (Testing)</option>
                    <option value="fi-rr-rocket">Rocket (Launch)</option>
                    <option value="fi-rr-users">Users (Team)</option>
                    <option value="fi-rr-lightbulb">Lightbulb (Strategy)</option>
                    <option value="fi-rr-briefcase">Briefcase (Consulting)</option>
                </select>
            </div>
            <button type="button" onclick="removeService(this)" class="sm:static absolute top-0 right-0 sm:mt-6 mt-0 text-red-500 hover:text-red-700">
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
        let metricCount = 1;

        function addMetric ()
        {
            metricCount++;
            const metricsContainer = document.getElementById( 'metricsContainer' );

            const metricItem = document.createElement( 'div' );
            metricItem.className = 'metric-item p-4 border border-gray-200 dark:border-gray-700 rounded-xl';
            metricItem.innerHTML = `
        <div class="relative flex items-center sm:flex-row flex-col gap-4 mb-4">
            <div class="w-full flex-1">
                <label class="block text-sm font-medium text-gray-800 dark:text-gray-100 mb-2">
                    Metric Value
                </label>
                <input type="text" name="metric_value[]" required
                    class="w-full px-3 py-2 text-sm text-gray-800 dark:text-gray-100 outline-none border border-gray-300 focus:border-primary dark:focus:border-primary dark:border-gray-700 rounded-lg bg-gray-50 dark:bg-gray-700"
                    placeholder="40%">
            </div>
            <div class="w-full flex-1">
                <label class="block text-sm font-medium text-gray-800 dark:text-gray-100 mb-2">
                    Metric Label
                </label>
                <input type="text" name="metric_label[]" required
                    class="w-full px-3 py-2 text-sm text-gray-800 dark:text-gray-100 outline-none border border-gray-300 focus:border-primary dark:focus:border-primary dark:border-gray-700 rounded-lg bg-gray-50 dark:bg-gray-700"
                    placeholder="Reduction in bounce rate">
            </div>
            <button type="button" onclick="removeMetric(this)" class="sm:static absolute top-0 right-0 sm:mt-6 mt-0 text-red-500 hover:text-red-700">
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

        // Form submission
        document.getElementById( 'addProjectForm' ).addEventListener( 'submit', function ( e )
        {
            e.preventDefault();
            // Collect form data and handle submission
            const formData = new FormData( this );
            const data = Object.fromEntries( formData.entries() );

            // Handle arrays for services and metrics
            data.services_list = [];
            data.metrics_list = [];

            // You would typically send this data to your backend here
            console.log( 'Form data:', data );

            // Show success message
            alert( 'Project saved successfully!' );
            // window.location.href = '/projects'; // Redirect to projects page
        } );

        // Save draft functionality
        document.getElementById( 'saveDraft' ).addEventListener( 'click', function ()
        {
            const formData = new FormData( document.getElementById( 'addProjectForm' ) );
            const data = Object.fromEntries( formData.entries() );

            // Save to localStorage or send to backend for draft
            localStorage.setItem( 'projectDraft', JSON.stringify( data ) );

            alert( 'Draft saved successfully!' );
        } );