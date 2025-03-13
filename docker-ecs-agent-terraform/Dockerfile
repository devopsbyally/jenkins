# Start with Amazon Linux as the base image
FROM amazonlinux:2

# Install dependencies
RUN yum install -y unzip curl && \
    yum clean all

# Download and install Terraform
RUN curl -fsSL -o terraform.zip https://releases.hashicorp.com/terraform/1.7.5/terraform_1.7.5_linux_amd64.zip && \
    unzip terraform.zip && \
    mv terraform /usr/local/bin/ && \
    rm terraform.zip

# Verify installation
RUN terraform version

# Copy the ECS Agent binary
COPY --from=amazon/amazon-ecs-agent:latest / /ecs-agent

# Set the working directory
WORKDIR /ecs-agent

# Default command
CMD ["/ecs-agent"]
